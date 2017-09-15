import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  gql,
  graphql,
} from 'react-apollo';

class Home extends Component {
  render() {
    console.log('result :', this.props.allRecordsQuery);
    // 1
    if (this.props.allRecordsQuery && this.props.allRecordsQuery.loading) {
      return <div>Loading</div>;
    }

    // 2
    if (this.props.allRecordsQuery && this.props.allRecordsQuery.error) {
      return <div>Error</div>;
    }

    // 3
    const recordsToRender = this.props.allRecordsQuery.allRecords.records;

    return (
      <div>
        {recordsToRender.map(record => (
          <li key={record.id}>{record.url}</li>
        ))}
      </div>
    );
  }
}

Home.propTypes = {};

const ALL_RECORDS_QUERY = gql`
  query AllRecordsQuery {
    allRecords(skip:0, limit:10) {
      status
      message
      records {
        id
        url
        description
      }
    }
  }
`;

export default graphql(ALL_RECORDS_QUERY, {name: 'allRecordsQuery'})(Home);
