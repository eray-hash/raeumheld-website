/* Klaro! Cookie-Consent-Konfiguration für raeumheld.de
 * Lokal gehostet, keine externe Verbindung.
 * Default: nichts geladen bis User opt-in (DSGVO/TDDDG-konform).
 */
window.klaroConfig = {
  version: 1,
  elementID: 'klaro',
  testing: false,
  htmlTexts: true,
  embedded: false,
  groupByPurpose: true,
  noAutoLoad: false,

  // Speicher-Konfiguration
  storageMethod: 'cookie',
  cookieName: 'klaro_consent',
  cookieExpiresAfterDays: 180,
  cookieDomain: '.raeumheld.de',

  // UI / Verhalten
  default: false,           // nichts ist standardmäßig akzeptiert (DSGVO)
  mustConsent: false,       // User darf Banner schließen ohne Entscheidung
  acceptAll: true,          // "Alles akzeptieren"-Button
  hideDeclineAll: false,    // "Alles ablehnen"-Button gleichwertig sichtbar
  hideLearnMore: false,
  noticeAsModal: false,     // Banner unten, nicht modaler Overlay

  // Styling
  styling: {
    theme: ['light', 'bottom', 'wide']
  },

  // Übersetzungen
  translations: {
    zz: {
      privacyPolicyUrl: '/datenschutz.html'
    },
    de: {
      privacyPolicyUrl: '/datenschutz.html',
      consentModal: {
        title: 'Cookie-Einstellungen',
        description: 'Hier können Sie einsehen und anpassen, welche Informationen wir über Sie sammeln. Pflichtangaben sind mit einem * markiert.'
      },
      consentNotice: {
        changeDescription: 'Es gab Änderungen seit Ihrem letzten Besuch, bitte bestätigen Sie Ihre Auswahl erneut.',
        description: 'Wir möchten mit Ihrer Einwilligung anonyme Statistiken über die Nutzung dieser Webseite erheben (Google Analytics). So können wir die Webseite verbessern. Sie können Ihre Auswahl jederzeit unten links über „Cookie-Einstellungen" anpassen.',
        learnMore: 'Einstellungen'
      },
      ok: 'Alle akzeptieren',
      acceptAll: 'Alle akzeptieren',
      acceptSelected: 'Auswahl speichern',
      decline: 'Alle ablehnen',
      close: 'Schließen',
      poweredBy: '',
      contextualConsent: {
        description: 'Möchten Sie externe Inhalte von „{title}" laden?',
        acceptOnce: 'Ja',
        acceptAlways: 'Immer'
      },
      purposes: {
        analytics: {
          title: 'Statistik / Analyse',
          description: 'Anonyme Auswertung der Nutzung dieser Webseite, um Inhalte und Performance zu verbessern.'
        },
        functional: {
          title: 'Notwendig',
          description: 'Technisch notwendige Dienste, ohne die die Webseite nicht funktioniert.'
        }
      },
      service: {
        disableAll: {
          title: 'Alle Dienste aktivieren oder deaktivieren',
          description: 'Mit diesem Schalter aktivieren oder deaktivieren Sie alle Dienste auf einmal.'
        },
        optOut: {
          title: '(Opt-Out)',
          description: 'Dieser Dienst ist standardmäßig aktiv (Sie können ihn aber deaktivieren).'
        },
        required: {
          title: '(immer notwendig)',
          description: 'Dieser Dienst ist für die Funktionsweise der Webseite zwingend erforderlich und kann nicht deaktiviert werden.'
        },
        purposes: 'Zwecke',
        purpose: 'Zweck'
      },
      'google-analytics': {
        description: 'Anonyme Reichweitenmessung. Anbieter: Google Ireland Ltd. Speicherort: USA. Speicherdauer: 14 Monate. IP wird gekürzt.'
      }
    }
  },

  // Services
  services: [
    {
      name: 'google-analytics',
      title: 'Google Analytics 4',
      purposes: ['analytics'],
      cookies: [
        [/^_ga/, '/', '.raeumheld.de'],
        [/^_gid$/, '/', '.raeumheld.de'],
        [/^_gat/, '/', '.raeumheld.de']
      ],
      callback: function(consent, service) {
        if (consent === true) {
          // Lade gtag.js erst NACH Einwilligung
          var s = document.createElement('script');
          s.async = true;
          s.src = 'https://www.googletagmanager.com/gtag/js?id=G-4CC3QFJBV5';
          document.head.appendChild(s);

          window.dataLayer = window.dataLayer || [];
          window.gtag = function() { dataLayer.push(arguments); };
          gtag('js', new Date());
          gtag('config', 'G-4CC3QFJBV5', {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        }
      },
      required: false,
      optOut: false,
      onlyOnce: true
    }
  ]
};
