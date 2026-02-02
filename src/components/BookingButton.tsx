"use client";

import { ArrowRight } from "lucide-react";

const BOOKING_URL = "https://outlook.office.com/bookwithme/user/25bbafd7aa564389bcda37e8b5b8e918@onestepinnovations.com.au/meetingtype/2CuJnw-1HkiM_lr5zCs25Q2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile";

interface BookingButtonProps {
    text?: string;
    showArrow?: boolean;
    className?: string;
}

export default function BookingButton({ 
    text = "Book Your Consultation", 
    showArrow = true,
    className = "inline-flex items-center gap-2 px-8 py-4 bg-deep-amber text-black font-semibold rounded-full text-lg hover:bg-white transition-all duration-300 hover:scale-105"
}: BookingButtonProps) {
    const handleClick = () => {
        if (typeof window !== 'undefined' && (window as unknown as { gtag_report_conversion: (url: string) => boolean }).gtag_report_conversion) {
            (window as unknown as { gtag_report_conversion: (url: string) => boolean }).gtag_report_conversion(BOOKING_URL);
        } else {
            window.open(BOOKING_URL, '_blank');
        }
    };

    return (
        <button onClick={handleClick} className={className}>
            {text}
            {showArrow && <ArrowRight className="w-5 h-5" />}
        </button>
    );
}
