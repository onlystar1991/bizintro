import { requestWatcher } from './utils';

let getIntroductions;

export function watchDashboard() {
  dashboardWatcher = requestWatcher.watch('/api/task?status=Running');
  return dashboardWatcher;
}

export function unwatchDashboard() {
  if (dashboardWatcher) {
    dashboardWatcher.stop();
  }
}
