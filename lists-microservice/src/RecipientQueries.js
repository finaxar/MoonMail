import App from './App';
import Api from './Api';

async function searchRecipients(event, context, callback) {
  try {
    App.configureLogger(event, context);
    App.logger().info('searchRecipients', JSON.stringify(event));
    const recipients = await Api.searchRecipients(event);
    callback(null, recipients);
  } catch (error) {
    App.logger().error(error, error.stack);
    callback(error);
  }
}

export default {
  searchRecipients
};
