

import Link from 'next/link';
import Image from 'next/image';

import { NATIVE_ENCODER_LOGO } from '../../../public/assets';

export default function Navigations() {
    return (
        <nav className="w-full bg-primary text-secondary shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo Placeholder */}
                <div className="flex items-center space-x-3">
                    <Image
                        src={NATIVE_ENCODER_LOGO}
                        alt="Native Encoder Logo"
                        width={60}
                        height={60}
                        className="w-16 h-16 rounded-full bg-secondary object-contain"
                        priority
                    />
                    <span className="hidden sm:block font-semibold text-lg text-secondary">Native Encoder</span>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 flex items-center justify-center">
                    <ul className="flex space-x-8">
                        <li>
                            <Link href="/services" className="hover:text-popupcolor transition-colors font-medium">Services</Link>
                        </li>
                        <li>
                            <Link href="/client-feedback" className="hover:text-popupcolor transition-colors font-medium">Testimonials</Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="hover:text-popupcolor transition-colors font-medium">About Us</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}