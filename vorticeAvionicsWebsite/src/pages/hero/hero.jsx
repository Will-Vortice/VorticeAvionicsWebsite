import { useNavigate, Link } from "react-router-dom";
import { motion } from 'motion/react';
import { ArrowRight, Radar } from 'lucide-react';
import { useState } from "react";
import cutLogo from '../../assets/Vortice Avionics Logo Stack Colourlarge Just Logo.png';
import './hero.css'

function Hero(){
    return(
        <div className="hero">
            {/* Radar-style rings */}
            <div className="radar-rings">
                <motion.div
                className="radar-ring"
                animate={{ scale: [1, 2, 2], opacity: [0.35, 0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                />
                <motion.div
                className="radar-ring"
                animate={{ scale: [1, 2, 2], opacity: [0.35, 0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
                />
                <motion.div
                className="radar-ring"
                animate={{ scale: [1, 2, 2], opacity: [0.35, 0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 2 }}
                />
            </div>

            <div className="home-content">
                {/* Radar Icon */}
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="radar-icon-wrapper"
                >
                    <div className="radar-icon-container">
                        <img src={cutLogo}/>
                        <motion.div
                        className="radar-icon-glow"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>

                
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                >
                <h1 className="home-headline">
                    Advancing the future of defense/law enforcement through drone/UAV technologies
                </h1>
                </motion.div>

                {/* Subtext */}
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="home-subtext"
                >
                Research and development for next-generation aerial systems
                </motion.p>

                {/* CTA Button */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="cta-wrapper"
            >
                <Link to="/contact" className="cta-button">
                    <span className="cta-text">Contact Us</span>
                    <ArrowRight className="cta-arrow" />
                    <div className="cta-hover-bg" />
                </Link>
            </motion.div>
        
        </div>
        </div>
    )
}

export default Hero;