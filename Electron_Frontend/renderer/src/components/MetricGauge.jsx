import React from 'react';

/**
 * MetricGauge Component
 * 
 * Circular gauge visualization for displaying numerical metrics
 * Uses SVG to create a visually appealing radial progress indicator
 * Supports custom colors based on threshold values (passed from parent)
 * Can display additional information as a subtitle
 * 
 * @param {string} title - The title of the metric being displayed
 * @param {number} value - The value to display (0-100)
 * @param {string} color - The color of the progress arc (hex or named color)
 * @param {string} subtitle - Optional additional text to display below the gauge
 * @param {string} suffix - Optional suffix for the value (e.g., '%', 'GB')
 */
const MetricGauge = ({ title, value, color, subtitle, suffix = '' }) => {
  // Calculate circle properties for SVG
  const circumference = 2 * Math.PI * 45; // Circle circumference with radius 45
  const offset = circumference - (value / 100) * circumference; // Calculate progress offset

  return (
    <div className="bg-white rounded-lg p-4">
      {/* Gauge title */}
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      
      {/* Gauge visualization container */}
      <div className="relative w-32 h-32 mx-auto">
        <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
          {/* Background circle - gray track */}
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          {/* Progress circle - colored progress indicator */}
          <circle
            className="transition-all duration-300"
            strokeWidth="8"
            stroke={color}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
        </svg>
        {/* Center value display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">
            {value.toFixed(0)}{suffix}
          </span>
        </div>
      </div>
      {/* Optional subtitle (e.g., "1.65/1.75 GB") */}
      {subtitle && (
        <div className="text-center mt-2 text-gray-600">{subtitle}</div>
      )}
    </div>
  );
};

export default MetricGauge;