export const getHostname = (): string => {
  return window.location.hostname;
};

export const getBackendAddress = (): string => {
  switch (getHostname()) {
    case 'localhost':
      return 'localhost:2473';
    case 'system.desecofe.com':
      return 'system.desecofe.com:2473';
    default:
      return 'backend.tms.desecofe.com';
  }
};
