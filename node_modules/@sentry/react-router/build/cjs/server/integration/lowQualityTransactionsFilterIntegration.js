Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');

/**
 * Integration that filters out noisy http transactions such as requests to node_modules, favicon.ico, @id/
 *
 */

function _lowQualityTransactionsFilterIntegration(options)

 {
  const matchedRegexes = [/GET \/node_modules\//, /GET \/favicon\.ico/, /GET \/@id\//, /GET \/__manifest\?/];

  return {
    name: 'LowQualityTransactionsFilter',

    processEvent(event, _hint, _client) {
      if (event.type !== 'transaction' || !event.transaction) {
        return event;
      }

      const transaction = event.transaction;

      if (matchedRegexes.some(regex => transaction.match(regex))) {
        options.debug && core.debug.log('[ReactRouter] Filtered node_modules transaction:', event.transaction);
        return null;
      }

      return event;
    },
  };
}

const lowQualityTransactionsFilterIntegration = core.defineIntegration((options) =>
  _lowQualityTransactionsFilterIntegration(options),
);

exports.lowQualityTransactionsFilterIntegration = lowQualityTransactionsFilterIntegration;
//# sourceMappingURL=lowQualityTransactionsFilterIntegration.js.map
