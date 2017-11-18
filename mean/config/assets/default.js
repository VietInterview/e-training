'use strict';

/* eslint comma-dangle:[0, 'only-multiline'] */

module.exports = {
  client: {
    lib: {
      css: [
        'public/assets/icons/flags/flags.min.css',
        'public/lib/uikit/css/uikit.almost-flat.min.css',
        // 'public/lib/uikit/css/uikit.min.css',
        // 'public/lib/uikit/css/uikit.gradient.min.css',
        'public/lib/angular-clndr/angular-clndr.css',
        'public/lib/angular-datatables/dist/css/angular-datatables.min.css',
        'public/assets/skins/dropify/css/dropify.css',
        'public/lib/angular-dragula/dist/dragula.min.css',
        //  'public/lib/angular-wizard/dist/angular-wizard.min.css',
        'public/lib/c3/c3.min.css',
        'public/lib/c3js-chart/c3.min.css',
        'public/lib/chartist/dist/chartist.min.css',
        // 'public/lib/ckeditor/contents.css',
        //'public/lib/codemirror/lib/codemirror.css',
        //'public/lib/cropper/dist/cropper.css',
        'public/lib/enjoyhint/enjoyhint.css',
        'public/lib/fullcalendar/dist/fullcalendar.min.css',
        'public/lib/jQuery-contextMenu/dist/jquery.contextMenu.min.css',
        'public/lib/jquery.scrollbar/jquery.scrollbar.css',
        'public/lib/kendo-ui/styles/kendo.common-material.min.css',
        'public/lib/kendo-ui/styles/kendo.material.min.css',
        //'public/lib/metrics-graphics/dist/metricsgraphics.css',
        'public/lib/switchery/dist/switchery.min.css',
        //'public/lib/weather-icons/css/weather-icons-wind.css',
        //'public/lib/weather-icons/css/weather-icons.css',
        'public/lib/angular-bootstrap/ui-bootstrap-csp.css',
        'public/lib/angular-ui-notification/dist/angular-ui-notification.min.css',
        'public/lib/jquery-ui/themes/smoothness/jquery-ui.min.css',
        //'public/file_manager/css/elfinder.css',
        //'public/file_manager/themes/material/css/theme.css',
        'public/assets/skins/jquery.fancytree/ui.fancytree.min.css',
        'public/assets/css/video.min.css',
        'public/lib/videojs-record/src/css/videojs.record.css',
      ],
      js: [
        //  non-angular
        'public/lib/kurento-utils/js/kurento-utils.js',
        'public/assets/js/custom/video.min.js',
        'public/lib/wavesurfer.js/dist/wavesurfer.min.js',
        'public/lib/wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js',
        'public/lib/videojs-wavesurfer/src/js/videojs.wavesurfer.js',
        'public/lib/videojs-record/src/js/videojs.record.js',
        'public/lib/recordrtc/RecordRTC.js',
        'public/lib/recordrtc/dev/MRecordRTC.js',
        'public/lib/recordrtc/dev/RecordRTC.promises.js',
        'public/lib/kurento-client/js/kurento-client.js',
        'public/lib/kurento-utils/js/kurento-utils.js',
        'public/lib/jquery/dist/jquery.js',
        'public/lib/modernizr/modernizr.js',
        'public/lib/moment/moment.js',
        'public/lib/fastclick/lib/fastclick.js',
        'public/lib/raphael/raphael.js',
        'public/lib/uikit/js/uikit.js',
        'public/lib/uikit/js/components/accordion.js',
        'public/lib/uikit/js/components/autocomplete.js',
        'public/assets/js/custom/uikit_datepicker.js',
        'public/lib/uikit/js/components/form-password.js',
        'public/lib/uikit/js/components/form-select.js',
        'public/lib/uikit/js/components/grid.js',
        'public/lib/uikit/js/components/lightbox.js',
        'public/lib/uikit/js/components/nestable.js',
        'public/lib/uikit/js/components/notify.js',
        'public/lib/uikit/js/components/slider.js',
        'public/lib/uikit/js/components/slideshow.js',
        'public/lib/uikit/js/components/sortable.js',
        'public/lib/uikit/js/components/sticky.js',
        'public/lib/uikit/js/components/tooltip.js',
        'public/assets/js/custom/uikit_fileinput.js',
        'public/assets/js/custom/uikit_timepicker.js',
        'public/lib/uikit/js/components/upload.js',
        'public/assets/js/custom/uikit_beforeready.js',
        'public/lib/jquery-bez/jquery.bez.min.js',
        'public/lib/jquery.actual/jquery.actual.js',
        'public/lib/waypoints/lib/jquery.waypoints.js',
        'public/lib/velocity/velocity.js',
        'public/lib/velocity/velocity.ui.js',
        'public/lib/jquery.dotdotdot/src/jquery.dotdotdot.js',
        'public/lib/hammerjs/hammer.js',
        'public/assets/js/custom/jquery.scrollbarWidth.js',
        'public/lib/jquery.debouncedresize/js/jquery.debouncedresize.js',
        'public/lib/screenfull/dist/screenfull.js',
        'public/lib/Waves/dist/waves.js',
        'public/lib/selectize/dist/js/standalone/selectize.js',
        'public/assets/js/custom/dropify/dist/js/dropify.js',
        'public/lib/autosize/dist/autosize.js',
        'public/lib/d3/d3.js',
        'public/lib/c3/c3.js',
        'public/lib/c3js-chart/c3.js',
        //  'public/lib/ckeditor/ckeditor.js',
        //  'public/lib/ckeditor/config.js',
        //  'public/lib/ckeditor/style.js',
        'public/lib/clndr/src/clndr.js',
        'public/lib/chartist/dist/chartist.js',
        'public/lib/codemirror/lib/codemirror.js',
        'public/assets/js/custom/codemirror_fullscreen.js',
        'public/lib/codemirror/addon/edit/matchtags.js',
        'public/lib/codemirror/addon/edit/matchbrackets.js',
        'public/lib/codemirror/addon/fold/xml-fold.js',
        'public/lib/codemirror/mode/htmlmixed/htmlmixed.js',
        'public/lib/codemirror/mode/xml/xml.js',
        'public/lib/codemirror/mode/php/php.js',
        'public/lib/codemirror/mode/clike/clike.js',
        'public/lib/codemirror/mode/javascript/javascript.js',
        'public/lib/countUp.js/countUp.js',
        'public/lib/cropper/dist/cropper.js',
        'public/lib/datatables/media/js/jquery.dataTables.js',
        'public/lib/dense/src/dense.js',
        'public/lib/enjoyhint/enjoyhint.js',
        'public/lib/eve-raphael/eve.js',
        'public/lib/fullcalendar/dist/fullcalendar.js',
        'public/lib/fullcalendar/dist/gcal.js',
        'public/lib/fullcalendar/dist/locale-all.js',
        'public/lib/iCheck/icheck.js',
        'public/lib/ion.rangeslider/js/ion.rangeSlider.js',
        'public/lib/jQuery-contextMenu/dist/jquery.contextMenu.js',
        'public/lib/jQuery-contextMenu/dist/jquery.ui.position.js',
        'public/lib/jquery-mapael/js/jquery.mapael.js',
        'public/lib/jquery-mapael/js/maps/world_countries.js',
        'public/lib/jquery-mapael/js/maps/usa_states.js',
        'public/lib/jquery-mousewheel/jquery.mousewheel.js',
        'public/lib/jquery-ui/jquery-ui.js',
        'public/lib/jquery.fancytree/dist/jquery.fancytree-all.js',
        'public/lib/jquery.inputmask/dist/jquery.inputmask.bundle.js',
        'public/lib/jquery.scrollbar/jquery.scrollbar.js',
        'public/lib/jquery.scrollTo/jquery.scrollTo.js',
        'public/lib/jsdiff/diff.js',
        'public/lib/jszip/dist/jszip.js',
        'public/lib/maplace-js/dist/maplace.js',
        'public/lib/marked/marked.min.js',
        'public/lib/matchMedia/matchMedia.js',
        'public/lib/matchMedia/matchMedia.addListener.js',
        'public/lib/metrics-graphics/dist/metricsgraphics.js',
        'public/lib/microplugin/src/microplugin.js',
        'public/lib/parsleyjs/dist/parsley.js',
        'public/assets/js/custom/parsleyjs_config.js',
        'public/lib/pdfmake/build/pdfmake.js',
        'public/lib/pdfmake/build/vfs_fonts.js',
        'public/lib/peity/jquery.peity.js',
        'public/lib/prism/prism.js',
        'public/lib/prism/components/prism-php.js',
        'public/lib/prism/plugins/line-numbers/prism-line-numbers.js',
        'public/lib/push.js/push.js',
        'public/lib/sifter/sifter.js',
        'public/lib/switchery/dist/switchery.js',
        'public/lib/tinymce/tinymce.js',
        'public/lib/tinymce/plugins/**/*.min.js',
        'public/lib/tinymce/themes/**/*.min.js',
        'public/lib/transitionize/dist/transitionize.js',
        'public/assets/js/custom/gantt_chart.js',
        'public/lib/uikit/js/components/htmleditor.js',
        'public/file_manager/js/elfinder.full.js',
        // angular-based
        'public/lib/angular/angular.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-pdf-viewer/dist/angular-pdf-viewer.min.js',
        'public/lib/angular-sanitize/angular-sanitize.js',
        'public/lib/oclazyload/dist/ocLazyLoad.js',
        'public/lib/angular-breadcrumb/dist/angular-breadcrumb.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-ui-notification/dist/angular-ui-notification.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/angular-audio/app/angular.audio.js',
        'public/lib/angular-clndr/angular-clndr.js',
        'public/lib/angular-cookies/angular-cookies.js',
        'public/lib/angular-datatables/dist/angular-datatables.js',
        'public/lib/angular-dragula/dist/angular-dragula.js',
        'public/lib/angular-metrics-graphics/dist/angular-metrics-graphics.js',
        'public/lib/angular-ui-calendar/src/calendar.js',
        'public/lib/angular-wizard/dist/angular-wizard.js',
        'public/lib/angularUtils-pagination/dirPagination.js',
        'public/lib/c3-angular/c3-angular.js',
        'public/lib/jquery.easy-pie-chart/dist/angular.easypiechart.js',
        'public/lib/tablesorter/dist/js/jquery.tablesorter.js',
        'public/lib/tablesorter/dist/js/jquery.tablesorter.widgets.js',
        'public/lib/tablesorter/dist/js/widgets/widget-alignChar.min.js',
        'public/lib/tablesorter/dist/js/widgets/widget-columnSelector.min.js',
        'public/lib/tablesorter/dist/js/widgets/widget-print.min.js',
        'public/lib/tablesorter/dist/js/extras/jquery.tablesorter.pager.min.js',
        'public/lib/angular-translate/angular-translate.js',
        'public/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/ng-idle/angular-idle.js',
        'public/lib/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter.js',
        'public/lib/ngmap/build/scripts/ng-map.js',
        'public/lib/ngmap/directives/places-auto-complete.js',
        'public/lib/ngmap/directives/marker.js',
        'public/lib/angular-local-storage/dist/angular-local-storage.js',
        'public/lib/underscore/underscore.js',
        'public/lib/angular-underscore-module/angular-underscore-module.js',
        'public/lib/ng-file-upload/ng-file-upload.js',
        'public/lib/angular-translate-storage-local/angular-translate-storage-local.js',
        'public/lib/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
        'public/lib/angular-translate-handler-log/angular-translate-handler-log.js',
        'public/assets/js/custom/jquery.dataTables.columnFilter.js',
        'public/assets/js/custom/datatables/datatables.uikit.js',
        'public/lib/datatables-buttons/js/dataTables.buttons.js',
        'public/lib/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.js',
        'public/assets/js/custom/datatables/buttons.uikit.js',
        'public/lib/datatables-buttons/js/buttons.colVis.js',
        'public/lib/datatables-buttons/js/buttons.html5.js',
        'public/lib/datatables-buttons/js/buttons.print.js',
        'public/lib/kendo-ui/src/js/kendo.core.js',
        'public/lib/kendo-ui/src/js/kendo.angular.js',
        'public/lib/kendo-ui/src/js/kendo.color.js',
        'public/lib/kendo-ui/src/js/kendo.data.js',
        'public/lib/kendo-ui/src/js/kendo.calendar.js',
        'public/lib/kendo-ui/src/js/kendo.popup.js',
        'public/lib/kendo-ui/src/js/kendo.datepicker.js',
        'public/lib/kendo-ui/src/js/kendo.timepicker.js',
        'public/lib/kendo-ui/src/js/kendo.datetimepicker.js',
        'public/lib/kendo-ui/src/js/kendo.list.js',
        'public/lib/kendo-ui/src/js/kendo.fx.js',
        'public/lib/kendo-ui/src/js/kendo.userevents.js',
        'public/lib/kendo-ui/src/js/kendo.menu.js',
        'public/lib/kendo-ui/src/js/kendo.draganddrop.js',
        'public/lib/kendo-ui/src/js/kendo.slider.js',
        'public/lib/kendo-ui/src/js/kendo.mobile.scroller.js',
        'public/lib/kendo-ui/src/js/kendo.autocomplete.js',
        'public/lib/kendo-ui/src/js/kendo.combobox.js',
        'public/lib/kendo-ui/src/js/kendo.dropdownlist.js',
        'public/lib/kendo-ui/src/js/kendo.colorpicker.js',
        'public/lib/kendo-ui/src/js/kendo.maskedtextbox.js',
        'public/lib/kendo-ui/src/js/kendo.multiselect.js',
        'public/lib/kendo-ui/src/js/kendo.numerictextbox.js',
        'public/lib/kendo-ui/src/js/kendo.toolbar.js',
        'public/lib/kendo-ui/src/js/kendo.panelbar.js',
        'public/lib/kendo-ui/src/js/kendo.window.js',
        'public/lib/re-tree/re-tree.js',
        'public/lib/ng-device-detector/ng-device-detector.js',
        'public/lib/webrtc-adapter/release/adapter.js',
        'public/lib/ng-csv/build/ng-csv.js',
        'public/lib/js-xlsx/shim.js',
        'public/lib/js-xlsx/jszip.js',
        'public/lib/js-xlsx/dist/xlsx.full.min.js',
        'src/client/shared/directives/angular-camera.js'
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'public/assets/css/main.css'
    ],
    less: [
      'public/assets/less/*.less'
    ],
    sass: [
      'public/assets/scss/*.scss'
    ],
    js: [
      'src/client/core/app/config.js',
      'src/client/core/app/init.js',
      'src/client/*/*.js',
      'src/client/*/**/*.js',
    ],
    img: [
      'src/client/**/*/img/**/*.jpg',
      'src/client/**/*/img/**/*.png',
      'src/client/**/*/img/**/*.gif',
      'src/client/**/*/img/**/*.svg',
      'public/assets/icons/**/*.png',
      'public/assets/icons/**/*.svg',
      'public/assets/img/*.png',
      'public/assets/img/*.svg',
      'public/assets/img/**/*.png',
      'public/assets/img/**/*.svg'
    ],
    font: ['public/lib/uikit/fonts/*.*'],
    views: ['src/client/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gulpConfig: ['gulpfile.js'],
    allJS: ['server.js', 'config/**/*.js', 'src/server/**/*.js'],
    models: 'src/server/*/models/*.js',
    routes: ['src/server/!(core)/routes/*.js', 'src/server/core/routes/*.js'],
    sockets: 'src/server/sockets/*.js',
    config: ['src/server/*/config/*.js'],
    policies: 'src/server/*/policies/*.js',
    views: ['src/server/*/views/*.html', 'src/server/*/templates/*.html']
  }
};
