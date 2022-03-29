/** @type {import('next').NextConfig} */

const { withSentryConfig } = require('@sentry/nextjs')

const isProd = process.env.node_ENV === 'production'

const nextConfig = {
  reactStrictMode: true
}

const moduleExports = {
  ...nextConfig
}

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: !isProd // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

module.exports = isProd
  ? withSentryConfig(moduleExports, sentryWebpackPluginOptions)
  : { ...moduleExports }


JOEEHOEE??? contact met Pandu (/ContactOptions<Elmar>)
