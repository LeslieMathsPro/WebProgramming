<template>
	<div>
		<h3>Rooms</h3>
		<el-table :data="tableData" ref="filterTable" style="width: 100%">
			<el-table-column prop="id" label="Room ID" width="180">
			</el-table-column>
			<el-table-column prop="name" label="Name" width="180">
			</el-table-column>
			<el-table-column prop="floor" label="Floor" width="180">
			</el-table-column>
			<el-table-column prop="currentTemperature" label="Current Temperature" width="180">
			</el-table-column>
			<el-table-column prop="targetTemperature" label="Target Temperature" width="180">
			</el-table-column>
			<el-table-column prop="buildingName" label="Building Name" width="180">
			</el-table-column>

		</el-table>
	</div>
</template>

<script>
	export default {
		name: "RoomList",

		beforeRouteEnter(to, from, next) {
			console.log("Enter Room List page");
			next(vm => {
				vm.getData();
			});
		},

		data() {
			return {
				tableData: [],
				buildingFilters: [{
					text: 'Espace Fauriel',
					value: 'Espace Fauriel'
				}, {
					text: 'Cours Fauriel',
					value: 'Cours Fauriel'
				}]
			}
		},

		methods: {
			getData: function() {
				this.axios({
					method: 'get',
					url: 'https://liwei-xu.cleverapps.io/api/rooms',
				}).then(response => {
					this.tableData = response.data;
					console.log(this.tableData)
				})
			},
			filterHandler(value, row, column) {
				const property = column['property'];
				return row[property] === value;
			},
			clearFilter() {
				this.$refs.filterTable.clearFilter();
			}
		}
	}
</script>

<style>
	.itemlist {
		background-color: #F5F7FA;
		width: 500px;
		padding-right: 10px;
		padding-left: 10px;
	}
</style>
