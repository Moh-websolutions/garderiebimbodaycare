module.exports = {
	i18n: {
	   domains: [
	      {
	        domain: 'bimbodaycare.ca',
	        defaultLocale: 'en-US',
	      },
	      {
	        domain: 'garderiebimbo.ca',
	        defaultLocale: 'fr',
	      },
	    ],
	},
   
};

const nextTranslate = require('next-translate');

module.exports = {
   ...nextTranslate(),

};
