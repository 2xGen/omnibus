import React, { useEffect, useState, useCallback } from 'react';

const GA_ID = 'G-G2QBJ21EKC';
const CONSENT_KEY = 'omnibus_cookie_consent';

const loadAnalytics = () => {
  if (typeof window === 'undefined') return;

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  if (!window.gtag) {
    window.gtag = function gtag(){
      window.dataLayer.push(arguments);
    };
  }

  if (!document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
    script.onload = () => {
      window.gtag('js', new Date());
      window.gtag('config', GA_ID, { anonymize_ip: true });
    };
  } else {
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
  }
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === 'accepted') {
      loadAnalytics();
    } else if (!consent) {
      setVisible(true);
    }

    window.__showCookieConsent = () => {
      setVisible(true);
    };

    return () => {
      if (window.__showCookieConsent) {
        delete window.__showCookieConsent;
      }
    };
  }, []);

  const accept = useCallback(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(CONSENT_KEY, 'accepted');
    loadAnalytics();
    setVisible(false);
  }, []);

  const decline = useCallback(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
    if (window.location) {
      window.location.reload();
    }
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-6">
      <div className="max-w-5xl mx-auto bg-gray-900/95 text-white rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="max-w-3xl">
          <h2 className="text-lg font-semibold mb-2">Cookies & Analytics</h2>
          <p className="text-sm text-gray-200">
            Omnibus Tennis uses minimal cookies and Google services (Analytics, Search Console) to understand how visitors find and use our Aruba tennis pages. We keep tracking to the absolute essentials so we can improve lessons and gear guides without compromising your privacy.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 shrink-0">
          <button
            onClick={accept}
            className="px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 font-semibold transition-colors"
          >
            Accept tracking
          </button>
          <button
            onClick={decline}
            className="px-5 py-2 rounded-full bg-gray-800 hover:bg-gray-700 font-semibold transition-colors text-gray-200"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
