const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bnawto", // الـ ID الخاص بك

  // ******* إعدادات الفيديو الاحترافية (HD) *******
  video: true,                 // تفعيل الفيديو
  videoCompression: false,     // إلغاء الضغط (يجعل الفيديو فائق الوضوح)
  viewportWidth: 1280,         // عرض عريض (HD)
  viewportHeight: 720,         // ارتفاع مناسب
  // *****************************************

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: false
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // هذا السطر مهم للحفاظ على الحالة بين الاختبارات كما في كودك
    testIsolation: false, 
  },
});