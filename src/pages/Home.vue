<template>
  <div class="flex flex-col lg:flex-row justify-start">
    <div class="px-5 sm:px-11 pt-6 w-full lg:w-8/12 pb-10">
      <div class="border rounded-lg">
        <img src="../assets/a-couple.png" alt="" class="w-full" />
        <div class="bg-blessmi-blue-10 px-3 sm:px-6 py-2 flex items-center">
          <p class="text-blessmi-faint-brown text-[10px] font-semibold">
            Organised by:
            <span class="text-blessmi-deep-blue text-[10px]">
              Mustapha Mohammed
            </span>
          </p>
          <p class="ml-auto font-semibold text-[10px]">One-off</p>
        </div>
        <div class="px-6">
          <div class="flex border-b py-4">
            <div class="flex items-center">
              <img src="../assets/ceremony.png" alt="ceremony logo" />
              <h3 class="ml-2 text-blessmi-deep-blue text-xs font-semibold">
                Ceremony
              </h3>
            </div>
            <p class="ml-auto text-blessmi-faint-brown text-xs">10 days left</p>
          </div>
        </div>
        <div class="pt-4 pb-6 pl-6 pr-4">
          <h2
            class="font-semibold text-lg sm:text-2xl text-blessmi-deep-blue mb-2 sm:mb-4"
          >
            Bless Chike and Shayo's wedding
          </h2>
          <p class="text-xs sm:text-sm">
            I need to raise 5 million naira for a wedding ceremony, that is
            scheduled to hold on the 26th June 2020, i need this money to
            support this couple and their newly born quadruplets in
            th<router-link
              to="/more"
              class="text-blessmi-deep-blue font-semibold"
              >...See more</router-link
            >
          </p>
        </div>
        <div>
          <div class="bg-blessmi-blue-10">
            <div class="px-10 flex items-center">
              <router-link
                to="/home/overview"
                class="text-[10px] sm:text-sm text-[#567286] mr-4 sm:mr-8 md:mr-10 font-semibold py-3"
                >Overview</router-link
              >
              <router-link
                to="/home/blessors"
                class="text-[10px] sm:text-sm text-[#567286] mr-4 sm:mr-8 md:mr-10 font-semibold py-3"
              >
                Blessors
              </router-link>
              <router-link
                to="/home/rewards"
                class="text-[10px] sm:text-sm text-[#567286] mr-4 sm:mr-8 md:mr-10 font-semibold py-3"
                >Rewards</router-link
              >
              <router-link
                to="/home/comments"
                class="text-[10px] sm:text-sm text-[#567286] mr-4 sm:mr-8 md:mr-10 font-semibold py-3"
                >Comments</router-link
              >
            </div>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="w-full px-5 sm:px-11 pt-6 lg:p-0 lg:w-3/12">
      <HomeSideColumn />
    </div>
  </div>
</template>

<script>
import HomeSideColumn from "../components/SideColumn.vue";
export default { components: { HomeSideColumn } };
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 2px outset #536f84;
}
</style>
