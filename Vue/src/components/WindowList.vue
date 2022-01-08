<template>
	<div>
		<h3>Windows</h3>
		<el-table :data="tableData" ref="filterTable" style="width: 100%">
			<el-table-column type="index" width="50" class="item_index">
			</el-table-column>
			<el-table-column prop="id" label="Window ID" width="180">
			</el-table-column>
			<el-table-column prop="name" label="Name" width="180">
			</el-table-column>
			<el-table-column prop="windowStatus" label="Window Status" width="180">
				<template slot-scope="scope">
					<el-tag :type="scope.row.windowStatus === 'CLOSED' ? 'primary' : 'success'" disable-transitions>
						{{scope.row.windowStatus}}
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
		name: "WindowList",

		beforeRouteEnter(to, from, next) {
			console.log("Enter Window List page");
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
					text: 'OPEN',
					value: 'OPEN'
				}, {
					text: 'CLOSED',
					value: 'CLOSED'
				}]
			}
		},

		methods: {
			getData: function() {
				this.axios({
					method: 'get',
					url: 'https://liwei-xu.cleverapps.io/api/windows',
				}).then(response => {
					this.tableData = response.data;
					console.log(this.tableData)
				})
			},
			switchStatus: function(id) {
				console.log("heater id : " + id)
				this.axios({
					method: 'put',
					url: 'https://liwei-xu.cleverapps.io/api/windows' + id + '/switch'
				});
				window.location.reload(); //refresh page to show current status 
			},
			filterTag(value, row) {
				return row.tag === value;
			},

			filterHandler(value, row, column) {
				const property = column['property'];
				return row[property] === value;
			},
			clearFilter() {
				this.$refs.filterTable.clearFilter();
			},
		}
	}
</script>

<style>
	.item_index {
		color: #B4BCCC;
	}
</style>
