// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // api_url: 'https://pos-api.jollapos.com/api',
  // site_url: 'https://pos-api.jollapos.com/',
  api_url: 'http://127.0.0.1:8000/api',
  site_url: 'http://127.0.0.1:8000/',
  access_token_identifier: 'AccessToken@JOLLA_POS',
  ionic_storage: {
    timezone_key: 'Timezone@IonicStorage',
    local_server_url_key: 'APIURL@IonicStorage',
    master_file_last_sync_key: 'MasterFileLastSync@IonicStorage',
    bluetooth_device_key: 'BluetoothDevice@IonicStorage',
    printer_type: 'PrinterType@IonicStorage',
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
