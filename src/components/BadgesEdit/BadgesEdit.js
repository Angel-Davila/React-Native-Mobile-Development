

class BadgesEdit extends React.Component {
    state = {
        loading: false,
        badge: {},
        form: {},

    };

    componentDidMount(){
        this.getBadge();
    }

    getBadge = () => {
        const {item} = this.props.route.params;
        this.setSteate({})
    }
}