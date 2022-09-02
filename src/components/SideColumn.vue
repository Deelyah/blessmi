<template>
  <div class="pt-6">
    <div class="border pt-10 rounded-lg px-10">
      <div class="border-b">
        <div class="flex justify-between pb-3">
          <p class="font-semibold text-xs text-blessmi-deep-blue">
            N2,000,320,000
          </p>
          <p class="font-semibold text-xs text-blessmi-deep-blue">
            N5,000,000,000
          </p>
        </div>
        <div class="w-full h-2 bg-blessmi-blue-10 rounded-lg relative pb-2">
          <div class="bg-[#567286] rounded-lg absolute top-0 w-1/3 h-2"></div>
        </div>
        <div class="flex justify-between pt-2 pb-4">
          <p class="text-xs text-blessmi-faint-brown font-medium">Raised</p>
          <p class="text-xs text-blessmi-faint-brown font-medium">Target</p>
        </div>
      </div>
      <p class="text-xs font-semibold text-blessmi-deep-blue pt-4 pb-2">
        Bless this Fundraiser by making a transfer to the bank account below or
        use the <span class="font-bold">“Bless”</span> button.
      </p>
      <div
        class="w-full bg-[#567286] flex flex-col items-center text-white rounded-md py-4 mb-8"
      >
        <p class="font-semibold">STERLING BANK</p>
        <div class="flex items-center mt-2 mb-2.5 justify-center">
          <h4 class="font-semibold mr-2">0046748389</h4>
          <img src="../assets/copy.png" alt="copy" />
        </div>
        <p class="font-semibold">Gbolahan Fawale</p>
      </div>
      <p class="font-semibold mb-2">
        You can also bless this fundraiser from anywhere in the world by using
        Paypal or Card.
      </p>
      <button
        class="w-full flex justify-center items-center py-3 mb-4 border rounded-[4px] shadow-md"
      >
        <img src="../assets/pay-pal.png" alt="" />
      </button>
      <button
        class="w-full flex justify-center items-center py-5 px-8 border rounded-[4px] shadow-md"
      >
        <img src="../assets/master-card.png" alt="" />
        <img src="../assets/visa.png" alt="" />
        <img src="../assets/verve.png" alt="" />
        <img src="../assets/union-pay.png" alt="" />
      </button>
      <button
        class="py-4 rounded-[4px] bg-[#3E3C3C] w-full mt-8 text-white font-semibold text-sm mb-10"
      >
        Share this Fundraiser
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  font-size: 12px;
}
</style>
