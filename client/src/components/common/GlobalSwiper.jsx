import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion'; // <-- Import Framer Motion
import GlobalButton from './GlobalButton';

// 1. Define the main container variants for stagger effect
const containerVariants = {
    // Initial state (hidden)
    hidden: { opacity: 0 },
    // Animated state (visible) - use 'when: "beforeChildren"' to ensure stagger works
    show: {
        opacity: 1,
        transition: {
            // Delay the start of the whole content animation slightly after the slide transition starts
            delayChildren: 0.3,
            // Stagger the children's animation by 0.1 seconds each
            staggerChildren: 0.1,
        },
    },
};

// 2. Define variants for individual content elements
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.17, 0.55, 0.55, 1], // Custom ease for a smooth feel
        },
    },
};

// 3. Define variants for the background image (subtle zoom/pan effect)
const bgImageVariants = {
    // Zoom in a bit when the slide becomes active
    show: {
        scale: 1.1,
        transition: {
            duration: 2, // Match the autoplay delay for a slow, continuous effect
            ease: "linear",
            // You can also add a subtle pan
            // x: ["0%", "5%"],
            // y: ["0%", "-5%"],
        },
    },
    // Reset scale when slide is inactive/exiting
    hidden: { scale: 1 },
};


const GlobalSwiper = ({ slides, buttonStyle = 'default', showIcon = false }) => {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000} // Swiper transition speed (already set to 1s)
                loop={true}
                className="h-screen w-full"
            >
                {slides.map((slide, index) => {
                    const IconComponent = slide.icon;

                    return (
                        <SwiperSlide key={slide.id}>
                            {({ isActive }) => ( // Use the isActive property from SwiperSlide render prop
                                <div className="relative h-screen w-full">
                                    {/* Background Image - Apply subtle animation here */}
                                    <motion.div
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: `url(${slide.bgImage})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                        // Apply variants only when slide is active/inactive
                                        variants={bgImageVariants}
                                        initial="hidden"
                                        animate={isActive ? "show" : "hidden"}
                                        transition={{ duration: 2000, ease: "linear" }}
                                    />

                                    {/* Dark Overlay - ALWAYS SHOW for better text readability */}
                                    <div className="absolute inset-0 bg-black/40" />

                                    {/* Content - Apply Staggered Animation to the main content wrapper */}
                                    <motion.div
                                        className="relative h-full w-full flex items-center justify-center pt-24 pb-12 px-4"
                                        // Only animate content on active slide
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate={isActive ? "show" : "hidden"}
                                    >
                                        <div className="max-w-4xl mx-auto text-center space-y-6">

                                            {/* Badge or Icon (Animated Item 1) */}
                                            {(showIcon && IconComponent) ? (
                                                <motion.div
                                                    className="flex justify-center mb-2"
                                                    variants={itemVariants}
                                                >
                                                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30">
                                                        <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white" />
                                                    </div>
                                                </motion.div>
                                            ) : slide.badge ? (
                                                <motion.span
                                                    className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/30"
                                                    variants={itemVariants}
                                                >
                                                    {slide.badge}
                                                </motion.span>
                                            ) : <motion.div variants={itemVariants} />} {/* Empty motion div to maintain stagger delay */}

                                            {/* Main Heading (Animated Item 2) */}
                                            <motion.h1
                                                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-snug"
                                                variants={itemVariants}
                                            >
                                                {slide.title}
                                            </motion.h1>

                                            {/* Subtitle (Animated Item 3) */}
                                            <motion.p
                                                className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto"
                                                variants={itemVariants}
                                            >
                                                {slide.subtitle || slide.description}
                                            </motion.p>

                                            {/* Buttons (Animated Item 4 - Grouped) */}
                                            <motion.div
                                                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 pb-12"
                                                variants={itemVariants}
                                            >
                                                <GlobalButton 
                                                    text={slide.button1}
                                                    link={slide.to1}
                                                    variant={buttonStyle === 'gradient' ? 'primary' : 'secondary'}
                                                    className="md"
                                                />
                                                <GlobalButton 
                                                    text={slide.button2}
                                                    link={slide.to2}
                                                    variant="outline"
                                                    className="md"
                                                    showArrow={false}
                                                />
                                            </motion.div>

                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Custom Swiper styles based on theme */}
            <style dangerouslySetInnerHTML={{ __html: `
                .swiper-button-next,
                .swiper-button-prev {
                    ${buttonStyle === 'gradient'
                        ? 'color: var(--color-primary);'
                        : buttonStyle === 'white'
                            ? 'color: #ffffff;'
                            : 'color: var(--color-primary);'
                    }
                    background: none !important;
                    width: auto;
                    height: auto;
                    border-radius: 0;
                    box-shadow: none;
                    transition: all 0.3s ease;
                }

                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    transform: scale(1.2);
                    opacity: 0.9;
                }

                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 20px;
                    font-weight: bold;
                    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                }

                .swiper-button-next {
                    right: 20px !important;
                }

                .swiper-button-prev {
                    left: 20px !important;
                }

                .swiper-pagination {
                    bottom: 40px !important;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 6px;
                    height: 3px;
                }

                .swiper-pagination-bullet {
                    width: 12px;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.3);
                    opacity: 1;
                    transition: all 0.3s ease;
                    border: none;
                    border-radius: 2px;
                    margin: 0 !important;
                    padding: 0 !important;
                    flex-shrink: 0;
                }

                .swiper-pagination-bullet-active {
                    ${buttonStyle === 'gradient'
                        ? 'background: var(--color-primary);'
                        : buttonStyle === 'white'
                            ? 'background: #ffffff;'
                            : 'background: var(--color-primary);'
                    }
                    width: 36px;
                    opacity: 1;
                    box-shadow: 0 0 12px ${buttonStyle === 'gradient'
                        ? 'rgba(var(--primary-rgb), 0.6)'
                        : buttonStyle === 'white'
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(var(--primary-rgb), 0.6)'
                    };
                    transition: all 0.3s ease;
                }
            `}} />
        </div>
    );
};

export default GlobalSwiper;