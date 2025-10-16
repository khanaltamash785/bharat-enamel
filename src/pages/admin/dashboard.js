import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

export default function AdminDashboard() {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Get token from localStorage
  const getToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('adminToken');
    }
    return null;
  };

  // Check authentication on mount
  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push('/admin');
    } else {
      fetchImages();
    }
  }, []);

  // Fetch all gallery images
  const fetchImages = async () => {
    try {
      const response = await fetch('/api/gallery/list');
      const data = await response.json();
      setImages(data.images || []);
    } catch (error) {
      console.error('Error fetching images:', error);
      setMessage({ type: 'error', text: 'Failed to load images' });
    } finally {
      setLoading(false);
    }
  };

  // Handle image upload
  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Please select an image file' });
      return;
    }

    setUploading(true);
    setMessage({ type: '', text: '' });

    try {
      const formData = new FormData();
      formData.append('image', file);

      const token = getToken();
      const response = await fetch('/api/gallery/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Image uploaded successfully!' });
        fetchImages(); 
      } else {
        setMessage({ type: 'error', text: data.error || 'Upload failed' });
      }
    } catch (error) {
      console.error('Upload error:', error);
      setMessage({ type: 'error', text: 'An error occurred during upload' });
    } finally {
      setUploading(false);
      // Reset file input
      e.target.value = '';
    }
  };

  // Handle image deletion
  const handleDelete = async (filename) => {
    if (!confirm(`Are you sure you want to delete ${filename}?`)) {
      return;
    }

    try {
      const token = getToken();
      const response = await fetch('/api/gallery/delete', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ filename })
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Image deleted successfully!' });
        fetchImages(); // Refresh image list
      } else {
        setMessage({ type: 'error', text: data.error || 'Delete failed' });
      }
    } catch (error) {
      console.error('Delete error:', error);
      setMessage({ type: 'error', text: 'An error occurred during deletion' });
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - BHARAT ENAMEL</title>
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Gallery Management
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Message Display */}
          {message.text && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-400' 
                : 'bg-red-100 text-red-800 border border-red-400'
            }`}>
              {message.text}
            </div>
          )}

          {/* Upload Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Upload New Image
            </h2>
            <div className="flex items-center gap-4">
              <label className="flex-1 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  disabled={uploading}
                  className="hidden"
                />
                <div className={`border-2 border-dashed rounded-lg p-8 text-center transition ${
                  uploading 
                    ? 'border-gray-300 bg-gray-50 cursor-not-allowed' 
                    : 'border-blue-400 hover:border-blue-600 bg-blue-50 dark:bg-gray-700'
                }`}>
                  <svg className="mx-auto h-12 w-12 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {uploading ? 'Uploading...' : 'Click to select an image'}
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Gallery Images ({images.length})
            </h2>
            
            {images.length === 0 ? (
              <p className="text-gray-500 text-center py-12">
                No images yet. Upload your first image above!
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {images.map((image) => (
                  <div key={image.name} className="group relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    {/* Image */}
                    <div className="aspect-square relative">
                      <Image
                        src={image.url}
                        alt={image.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Image Info & Actions */}
                    <div className="p-3">
                      <p className="text-xs text-gray-600 dark:text-gray-300 truncate mb-2">
                        {image.name}
                      </p>
                      <button
                        onClick={() => handleDelete(image.name)}
                        className="w-full px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}