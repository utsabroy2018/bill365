

import Image from 'next/image'
import Link from 'next/link'

export default function FooterCus() {
  return (
    <footer className="bg-[#f5f8fc] text-[#1a1a1a] w-full px-6 md:px-16 py-10">
      {/* <div className='container mx-auto'> */}
      <div className="container mx-auto px-4">
      <div className="grid grid-cols-6 gap-4">
        {/* Left Section */}
        <div className="col-span-2 col-start-1">
          <div className="flex items-center gap-2 mb-4">
            <img
            aria-hidden
            src="/logo_new.png"
            alt="logo"
            width={69}
            height={90}
            />
          </div>
          <p className="text-gray-600 mb-4">
           Welcome to Bill365 — Your Ultimate Billing Solution!
          </p>
          <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/synergicsofteksolutions/" target="_blank" className='text-2xl'><i className="fa fa-facebook text-indigo-900" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/company/synergicsoftek/" target="_blank" className='text-2xl'><i className="fa fa-linkedin-square text-indigo-900" aria-hidden="true"></i></a>
          </div>
        </div>

        {/* Middle Links */}
        <div className="flex col-span-4 col-start-3 gap-6 justify-end">
          {/* <div>
            <h4 className="font-semibold mb-2 text-lg">Useful Links</h4>
            <ul className="space-y-1 text-gray-700 text-base">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">GST Billing App in Kolkata for Android</Link></li>
              <li><Link href="#">Mobile</Link></li>
            </ul>
          </div> */}
          <div>
            <h4 className="font-semibold mb-2 text-lg">Useful Links</h4>
            <ul className="space-y-1 text-gray-700 text-base">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/features">Features</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        {/* <div className="hidden md:block flex-1 max-w-xs">
          <Image src="/footer-illustration.png" alt="Billing Illustration" width={300} height={300} />
        </div> */}
      </div>
      </div>
      {/* Bottom Line */}
      <div className="container mx-auto border-t border-gray-300 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p className='text-base'>Copyright © 2025 Bill365. All Rights Reserved</p>
        <div className="flex gap-6 mt-2 md:mt-0 text-base">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms Conditions</Link>
        </div>
      </div>
      {/* </div> */}
    </footer>
  )
}
