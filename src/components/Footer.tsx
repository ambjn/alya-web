import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Footer = () => (
    <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center space-y-1.5 px-4"
    >
        <nav className="flex items-center justify-center gap-3 md:gap-5 text-[#52525B] text-[10px] md:text-xs flex-wrap">
            <Link
                to="/terms"
                className="hover:text-white transition-colors duration-200"
            >
                Terms & Conditions
            </Link>
            <span className="text-[#3F3F46]" aria-hidden="true">·</span>
            <Link
                to="/privacy"
                className="hover:text-white transition-colors duration-200"
            >
                Privacy Policy
            </Link>
            <span className="text-[#3F3F46]" aria-hidden="true">·</span>
            <Link
                to="/license"
                className="hover:text-white transition-colors duration-200"
            >
                License
            </Link>
            <span className="text-[#3F3F46]" aria-hidden="true">·</span>
            <Link
                to="/copyright"
                className="hover:text-white transition-colors duration-200"
            >
                Copyright
            </Link>
            <span className="text-[#3F3F46]" aria-hidden="true">·</span>
            <Link
                to={'/support'}
                className="hover:text-white transition-colors duration-200"
            >
                Support
            </Link>
        </nav>
        <p className="text-[#3F3F46] text-[10px] md:text-[11px]">
            © 2026, All rights reserved.
        </p>
    </motion.footer>
);
