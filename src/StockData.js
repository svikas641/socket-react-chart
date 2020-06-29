import React, { useEffect } from "react";
import { updateData } from "./actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Chart from "./Chart";

const StockData = ({ updateData, data: { arrayData, loading } }) => {
	useEffect(() => {
		updateData();
	}, [updateData]);

	return <Chart data={arrayData} />;
};

StockData.propTypes = {
	updateData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	data: state.data,
});

export default connect(mapStateToProps, { updateData })(StockData);
