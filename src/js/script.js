const navButton = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("hamburger-active");

  if (mobileMenu.classList.contains("max-h-0")) {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-96"); // atau sesuaikan dengan tinggi kontenmu
  } else {
    mobileMenu.classList.remove("max-h-96");
    mobileMenu.classList.add("max-h-0");
  }
});

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));

    tab.classList.add("active");
    target.classList.add("active");
  });
});

const nextPhaseButtons = document.querySelectorAll("[data-tab-target]");

nextPhaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.tabTarget);

    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));

    target.classList.add("active");

    tabs.forEach((tab) => {
      if (tab.dataset.tabTarget === button.dataset.tabTarget) {
        tab.classList.add("active");
      }
    });
  });
});

// workflow section
// const button1 = document.getElementById("btn-1");
// const button2 = document.getElementById("btn-2");
// const button3 = document.getElementById("btn-3");
// // ------------------------------------------------
// const icon = document.getElementById("icon-1");
// const title = document.getElementById("title-1");
// const day = document.getElementById("day-1");
// const desc = document.getElementById("desc-1");
// // ------------------------------------------------
// const text1 = document.getElementById("text-1");
// const text2 = document.getElementById("text-2");
// const text3 = document.getElementById("text-3");
// const text4 = document.getElementById("text-4");
// const text5 = document.getElementById("text-5");
// const div5 = document.getElementById("div-5");
// // -----------------------------------------------
// const btnPhaseTo2 = document.getElementById("btn-phase-to-2");
// const btnPhaseTo3 = document.getElementById("btn-phase-to-3");

// btnPhaseTo2.addEventListener("click", () => {
//   // icon
//   icon.classList.remove("fa-magnifying-glass");
//   icon.classList.add("fa-user-gear");
//   icon.classList.remove("fa-gears");
//   // text
//   title.innerHTML = "Implementation & Certification";
//   day.innerHTML = "Day 3-7";
//   desc.innerHTML =
//     "Our team proceeds with installation, integration, and optional metrology certification.";

//   //color
//   button2.classList.remove("bg-white");
//   button2.classList.remove("text-[#12181F]");
//   button2.classList.add("bg-[#12181F]");
//   button2.classList.add("text-white");

//   button1.classList.remove("bg-[#12181F]");
//   button1.classList.remove("text-white");
//   button1.classList.add("text-[#12181F]");
//   button1.classList.add("bg-white");

//   button3.classList.remove("bg-[#12181F]");
//   button3.classList.remove("text-white");
//   button3.classList.add("bg-white");
//   button3.classList.add("text-[#12181F]");

//   // text-2
//   div5.classList.add("hidden");
//   text1.innerHTML = "Device installation & setup";
//   text2.innerHTML = "System calibration & testing";
//   text3.innerHTML = "Legal verification support (Tera/ISO)";
//   text4.innerHTML = "Technical handover & basic training";

//   currentId();
// });

// button1.addEventListener("click", () => {
//   // icon
//   icon.classList.add("fa-magnifying-glass");
//   icon.classList.remove("fa-gears");
//   icon.classList.remove("fa-user-gear");
//   // text
//   title.innerHTML = "Discovery & Planning";
//   day.innerHTML = "Day 1–3";
//   desc.innerHTML =
//     "We begin by identifying your business needs through a consultation session, either online or on-site.";

//   // color
//   button1.classList.add("bg-[#12181F]");
//   button1.classList.add("text-white");
//   button1.classList.remove("bg-white");
//   button1.classList.remove("text-[#12181F]");

//   button2.classList.remove("bg-[#12181F]");
//   button2.classList.remove("text-white");
//   button2.classList.add("text-[#12181F]");
//   button2.classList.add("bg-white");

//   button3.classList.remove("bg-[#12181F]");
//   button3.classList.remove("text-white");
//   button3.classList.add("bg-white");
//   button3.classList.add("text-[#12181F]");

//   // text-2
//   div5.classList.add("hidden");
//   text1.innerHTML = "Consultation (online or on-site)";
//   text2.innerHTML = "Needs assessment (scale type, usage, certification)";
//   text3.innerHTML = "Proposal & pricing (subscription or one-time)";
//   text4.innerHTML = "Invoice & agreement";
// });

// button2.addEventListener("click", () => {
//   // icon
//   icon.classList.remove("fa-magnifying-glass");
//   icon.classList.add("fa-user-gear");
//   icon.classList.remove("fa-gears");
//   // text
//   title.innerHTML = "Implementation & Certification";
//   day.innerHTML = "Day 3-7";
//   desc.innerHTML =
//     "Our team proceeds with installation, integration, and optional metrology certification.";

//   //color
//   button2.classList.remove("bg-white");
//   button2.classList.remove("text-[#12181F]");
//   button2.classList.add("bg-[#12181F]");
//   button2.classList.add("text-white");

//   button1.classList.remove("bg-[#12181F]");
//   button1.classList.remove("text-white");
//   button1.classList.add("text-[#12181F]");
//   button1.classList.add("bg-white");

//   button3.classList.remove("bg-[#12181F]");
//   button3.classList.remove("text-white");
//   button3.classList.add("bg-white");
//   button3.classList.add("text-[#12181F]");

//   // text-2
//   div5.classList.add("hidden");
//   text1.innerHTML = "Device installation & setup";
//   text2.innerHTML = "System calibration & testing";
//   text3.innerHTML = "Legal verification support (Tera/ISO)";
//   text4.innerHTML = "Technical handover & basic training";
// });

// button3.addEventListener("click", () => {
//   // icon
//   icon.classList.remove("fa-magnifying-glass");
//   icon.classList.remove("fa-user-gear");
//   icon.classList.add("fa-gears");
//   // text
//   title.innerHTML = "Ongoing Support & Optimization";
//   day.innerHTML = "Continuous";
//   desc.innerHTML =
//     "We ensure your systems run reliably through regular maintenance, calibration, and optional software integration.";

//   // color
//   button3.classList.remove("bg-white");
//   button3.classList.remove("text-[#12181F]");
//   button3.classList.add("bg-[#12181F]");
//   button3.classList.add("text-white");

//   button1.classList.remove("bg-[#12181F]");
//   button1.classList.remove("text-white");
//   button1.classList.add("text-[#12181F]");
//   button1.classList.add("bg-white");

//   button2.classList.remove("bg-[#12181F]");
//   button2.classList.remove("text-white");
//   button2.classList.add("bg-white");
//   button2.classList.add("text-[#12181F]");

//   // text-2
//   div5.classList.remove("hidden");
//   text1.innerHTML = "Preventive maintenance (scheduled)";
//   text2.innerHTML = "Re-calibration & legal renewal support";
//   text3.innerHTML = "Priority repair service (for subscribers)";
//   text4.innerHTML = "Software updates & dashboard monitoring";
//   text5.innerHTML = "Customer support & consultation";
// });

// function currentId() {
//   console.log("HALO");
// }
