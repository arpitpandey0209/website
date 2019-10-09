import preact from 'preact';
import PropTypes from 'prop-types';
import { Text, IntlProvider } from 'preact-i18n';
import MailtoDropdown from '../MailtoDropdown';

export default class ActionButton extends preact.Component {
    render() {
        const class_name = 'button' + (this.props.blob_url ? '' : ' disabled') + ' button-primary';

        const button =
            this.props.transport_medium === 'email' ? (
                <MailtoDropdown letter={this.props.letter} onSuccess={this.props.onSuccess} email={this.props.email} />
            ) : (
                <a
                    id="download-button"
                    className={class_name}
                    href={this.props.blob_url}
                    download={this.props.download_filename}
                    onClick={e => {
                        if (!this.props.download_active) e.preventDefault();
                        else this.props.onSuccess();
                    }}>
                    <Text id="download-pdf" />
                    &nbsp;&nbsp;
                    <span className="icon icon-download" />
                </a>
            );

        return (
            <IntlProvider scope="generator" definition={I18N_DEFINITION}>
                {button}
            </IntlProvider>
        );
    }

    static get defaultProps() {
        return {
            transport_medium: 'email',
            email: '',
            letter: undefined,
            blob_url: undefined,
            download_filename: '',
            download_active: false
        };
    }

    // Note: This is not currently being checked but will be starting with Preact X.
    static propTypes = {
        transport_medium: PropTypes.oneOf(['fax', 'email', 'letter', 'custom']),
        email: PropTypes.string,
        letter: PropTypes.object,
        blob_url: PropTypes.string,
        download_filename: PropTypes.string,
        download_active: PropTypes.bool,
        onSuccess: PropTypes.func.isRequired
    };
}
