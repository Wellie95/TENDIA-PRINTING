const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const menuBtn=document.querySelector("#menuBtn"),mobileMenu=document.querySelector("#mobileMenu");
if(menuBtn&&mobileMenu){menuBtn.addEventListener("click",()=>mobileMenu.classList.toggle("open"));document.querySelectorAll("#mobileMenu a").forEach(a=>a.addEventListener("click",()=>mobileMenu.classList.remove("open")));}
const form=document.querySelector("#quoteForm");
if(form){form.addEventListener("submit",e=>{e.preventDefault();const f=new FormData(form);const message="*TENDIA PRINTING QUOTE REQUEST*\n\nName: "+f.get("name")+"\nPhone/WhatsApp: "+f.get("phone")+"\nEmail: "+(f.get("email")||"Not provided")+"\nService: "+f.get("service")+"\n\nProject details:\n"+f.get("details")+"\n\n✨ Your vision, printed perfectly ✨";window.open("https://wa.me/27754439922?text="+encodeURIComponent(message),"_blank");});}
