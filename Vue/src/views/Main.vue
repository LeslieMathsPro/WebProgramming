<template>
	<div>
		<el-container>
			<!-- SIDE BAR -->
			<el-aside width="200px">
				<el-menu :default-openeds="['1']">
					<el-menu-item-group>
						<el-menu-item index="1">
							<router-link to="/faircorp/rooms">Rooms</router-link>
						</el-menu-item>
						<el-menu-item index="2">
							<router-link to="/faircorp/windows">Windows</router-link>
						</el-menu-item>
						<el-menu-item index="3">
							<router-link to="/faircorp/heaters">Heaters</router-link>
						</el-menu-item>
						</el-menu-item-group>
				</el-menu>
			</el-aside>

			<!-- HEADER -->
			<el-container>

				<el-main>
					<router-view/>
				</el-main>
			</el-container>
		</el-container>


	</div>
</template>

<script>
	export default {
		name: "Main",
		data(){
			return{
			};
		},
		
	}
</script>

<style>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}
	
	.navigation{
		font:"microsoft sans serif";
		font-size:large;
		font-weight: 300;
	}
</style>
