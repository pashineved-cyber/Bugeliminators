import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [stats, setStats] = useState({
        documents: 0,
        questions: 0,
        accuracy: 0
    });
    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                documents: prev.documents < 1000 ? prev.documents + 10 : 1000,
                questions: prev.questions < 5000 ? prev.questions + 50 : 5000,
                accuracy: prev.accuracy < 98 ? prev.accuracy + 1 : 98
            }));
        }, 50);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 hero-gradient">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                            Transform Documents into
                            <span className="text-primary"> Interactive Knowledge</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-12">
                            Leverage AI to analyze, search, and extract insights from your documents instantly
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-4xl font-bold text-peach-dark mb-2">{stats.documents}+</h3>
                            <p className="text-gray-600">Documents Processed</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-4xl font-bold text-blue mb-2">{stats.questions}+</h3>
                            <p className="text-gray-600">Questions Answered</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-4xl font-bold text-peach-dark mb-2">{stats.accuracy}%</h3>
                            <p className="text-gray-600">Accuracy Rate</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default HeroSection