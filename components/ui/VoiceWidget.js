import React, { useEffect, useState } from 'react';

const VoiceWidget = ({ isVisible, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isVisible) {
      // Load the ElevenLabs script if not already loaded
      if (!document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]')) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
        script.async = true;
        script.type = 'text/javascript';
        script.onload = () => {
          setIsLoading(false);
        };
        document.head.appendChild(script);
      } else {
        setIsLoading(false);
      }
      
      // Set timeout to hide loading after 3 seconds regardless
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="voice-widget-container">
      <div className="voice-widget-header">
        <div className="voice-widget-title">
          <div className="voice-indicator">
            <div className="sound-wave">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="title-text">
            <h4>Talk to Ollie, Our AI Recruiter</h4>
            <p>Experience voice-first screening in 2 minutes</p>
          </div>
        </div>
        <button className="voice-widget-close" onClick={onClose}>
          <i className="fa-sharp fa-regular fa-x"></i>
        </button>
      </div>
      
      <div className="voice-widget-content">
        <div className="voice-widget-frame">
          {isLoading && (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Initializing AI Recruiter...</p>
            </div>
          )}
          
          {/* Direct ElevenLabs widget embed */}
          <div style={{ display: isLoading ? 'none' : 'block' }}>
            <elevenlabs-convai agent-id="agent_5301k33fcctxe2svm3kbjda4pnb9"></elevenlabs-convai>
          </div>
        </div>
        
        <div className="voice-widget-footer">
          <div className="trust-indicators">
            <span className="badge">No signup required</span>
            <span className="badge">2-minute demo</span>
            <span className="badge">Used by 800+ companies</span>
          </div>
          <div className="fallback-options">
            <button className="fallback-btn" onClick={onClose}>
              Skip to Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceWidget;