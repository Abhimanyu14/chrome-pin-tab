// chrome.runtime.onInstalled.addListener(() => {
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: "popup.html",
//     });
//   }
// });

chrome.commands.onCommand.addListener(async (command) => {
  const currentTab = await getCurrentTab();
  chrome.tabs.update(currentTab.id, { pinned: !currentTab.pinned });
});

const getCurrentTab = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
};
