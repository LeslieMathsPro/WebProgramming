<template>
	<div>
		<h3>Heaters</h3>
		<el-table :data="tableData" ref="filterTable" style="width: 100%">
			<el-table-column type="index" width="50" class="item_index">
			</el-table-column>
			<el-table-column prop="id" label="Heater ID" width="180">
			</el-table-column>
			<el-table-column prop="name" label="Name" width="180">
			</el-table-column>
			<el-table-column prop="heaterStatus" label="Heater Status" width="180">
				<template slot-scope="scope">
					<el-tag :type="scope.row.heaterStatus === 'OFF' ? 'primary' : 'success'" disable-transitions>
						{{scope.row.heaterStatus}}
					</el-tag>
				</template>
			</el-table-column>
			<el-table-column prop="roomName" label="Room Name" width="180">
			</el-table-column>
			<el-table-column label="Operation" width="180">
				<template slot-scope="scope">
					<el-button @click="switchStatus(scope.row.id)">SWITCH</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: "HeaterList",

		beforeRouteEnter(to, from, next) {
			console.log("Enter Heater List page");
			next(vm => {
				vm.getData();
			});
		},

		data() {
			return {
				tableData: [],
				roomFilters: [{
					text: 'Room1',
					value: 'Room1'
				}, {
					text: 'Room2',
					value: 'Room2'
				}],
				statusFilters: [{
					text: 'ON',
					value: 'ON'
				}, {
					text: 'OFF',
					value: 'OFF'
				}]
			}
		},

		methods: {
			getData: function() {
				// Get data from API
				this.axios({
					method: 'get',
					url: 'https://liwei-xu.cleverapps.io/api/heaters',
				}).then(response => {
					this.tableData = response.data;
				});

			},

			switchStatus: function(id) {
				console.log("heater id : " + id)
				this.axios({
					method: 'put',
					url: 'https://liwei-xu.cleverapps.io/api/heaters' + id + '/switch'
				});
				window.location.reload(); //refresh page to show current status 
			},

			clearFilter() {
				this.$refs.filterTable.clearFilter();
			},

			filterTag(value, row) {
				return row.tag === value;
			},

			filterHandler(value, row, column) {
				const property = column['property'];
				return row[property] === value;
			}
		}
	}
</script>

<style>
	.item_index {
		color: #B4BCCC;
	}
</style>
