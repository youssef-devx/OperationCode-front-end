import PropTypes from 'prop-types';
import nextCookie from 'next-cookies';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';

class Profile extends React.Component {
  static async getInitialProps(context) {
    const { firstName, lastName } = nextCookie(context);
    return { firstName, lastName };
  }

  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  };

  render() {
    const { firstName, lastName } = this.props;

    return (
      <>
        <Head title="Profile" />

        <HeroBanner title="Profile" />

        <Content
          theme="gray"
          columns={[
            <p>
              Hello {firstName} {lastName}! The profile page is an unfinished feature.
            </p>,
          ]}
        />
      </>
    );
  }
}

export default withAuthSync(Profile);
