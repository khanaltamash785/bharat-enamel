"use strict";(()=>{var a={};a.id=585,a.ids=[585],a.modules={5600:a=>{a.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},8036:(a,b,c)=>{c.r(b),c.d(b,{config:()=>o,default:()=>n,handler:()=>q});var d={};c.r(d),c.d(d,{default:()=>k});var e=c(9046),f=c(8667),g=c(3480),h=c(6435);let i=require("nodemailer");var j=c.n(i);async function k(a,b){if("POST"!==a.method)return b.status(405).json({error:"Method not allowed"});try{let{email:c}=a.body;if(!c||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c))return b.status(400).json({error:"Invalid email address"});let d=j().createTransport({service:"gmail",auth:{user:process.env.EMAIL_USER,pass:process.env.EMAIL_PASSWORD}}),e={from:process.env.EMAIL_USER,to:"bharatenamel@gmail.com",subject:"New Newsletter Subscription",html:`
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #4F46E5; margin-bottom: 20px;">New Newsletter Subscription</h2>
            <p style="font-size: 16px; color: #333; margin-bottom: 15px;">
              A new user has subscribed to your newsletter!
            </p>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0; color: #666;">
                <strong>Email:</strong> ${c}
              </p>
              <p style="margin: 10px 0 0 0; color: #666;">
                <strong>Date:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
            <p style="font-size: 14px; color: #666; margin-top: 20px;">
              This email was sent from BharatEnamel website newsletter subscription form.
            </p>
          </div>
        </div>
      `,text:`New Newsletter Subscription

Email: ${c}
Date: ${new Date().toLocaleString()}`};return await d.sendMail(e),b.status(200).json({message:"Subscription successful"})}catch(a){return console.error("Error sending email:",a),b.status(500).json({error:"Failed to process subscription"})}}var l=c(8112),m=c(6385);let n=(0,h.M)(d,"default"),o=(0,h.M)(d,"config"),p=new g.PagesAPIRouteModule({definition:{kind:f.A.PAGES_API,page:"/api/subscribe",pathname:"/api/subscribe",bundlePath:"",filename:""},userland:d,distDir:".next",relativeProjectDir:""});async function q(a,b,c){let d=await p.prepare(a,b,{srcPage:"/api/subscribe"});if(!d){b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve());return}let{query:f,params:g,prerenderManifest:h,routerServerContext:i}=d;try{let c=a.method||"GET",d=(0,l.getTracer)(),e=d.getActiveScopeSpan(),j=p.instrumentationOnRequestError.bind(p),k=async e=>p.render(a,b,{query:{...f,...g},params:g,allowedRevalidateHeaderKeys:[],multiZoneDraftMode:!1,trustHostHeader:!1,previewProps:h.preview,propagateError:!1,dev:p.isDev,page:"/api/subscribe",internalRevalidate:null==i?void 0:i.revalidate,onError:(...b)=>j(a,...b)}).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let f=d.getRootSpanAttributes();if(!f)return;if(f.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${f.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let g=f.get("next.route");if(g){let a=`${c} ${g}`;e.setAttributes({"next.route":g,"http.route":g,"next.span_name":a}),e.updateName(a)}else e.updateName(`${c} ${a.url}`)});e?await k(e):await d.withPropagatedContext(a.headers,()=>d.trace(m.BaseServerSpan.handleRequest,{spanName:`${c} ${a.url}`,kind:l.SpanKind.SERVER,attributes:{"http.method":c,"http.target":a.url}},k))}catch(a){if(p.isDev)throw a;(0,e.sendError)(b,500,"Internal Server Error")}finally{null==c.waitUntil||c.waitUntil.call(c,Promise.resolve())}}}};var b=require("../../webpack-api-runtime.js");b.C(a);var c=b.X(0,[169],()=>b(b.s=8036));module.exports=c})();