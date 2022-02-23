const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  "2393334364-ruvnjlmqomhul3r16sc7v2ugq168mg0m.apps.googleusercontent.com",
  "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", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token:
    "1//04rV51YMwbmolCgYIARAAGAQSNwF-L9IrmP2dYK69Je_UaawSM9Ueo3aI8_8yLCdnnVRQA8sObXOIVw-sDYGXq81XiTMt80NzC9k",
});

const accessToken = oauth2Client.getAccessToken();

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "rahulkumar90270@gmail.com",
    clientId:
      "2393334364-ruvnjlmqomhul3r16sc7v2ugq168mg0m.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//04rV51YMwbmolCgYIARAAGAQSNwF-L9IrmP2dYK69Je_UaawSM9Ueo3aI8_8yLCdnnVRQA8sObXOIVw-sDYGXq81XiTMt80NzC9k",
    accessToken: accessToken,
  },
});

module.exports = transport;
