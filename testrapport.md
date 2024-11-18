# **Life Metric - Test Report**

This document includes manually testable use cases based on user interactions with the health app. Each test case focuses on a specific feature, aiming to verify that the app behaves as expected in real-world scenarios.

## Test Environment
- **Operating System:** Windows 11
- **Browser:** Google Chrome Version 126.0.6478.254
- **App Version:** 1.0.0
- **Testing Tool:** Manual testing

---

### **UC1** Add Mood Entry
| **Test Case** | **Description** | **Steps** | **Expected Result** | **Status** |
|---------------|-----------------|-----------|----------------------|------------|
| 1.1 | Add a valid mood entry | 1. Open the app.<br>2. Enter a mood value (e.g., 7) in the form.<br>3. Submit the form. | The mood is added to the mood log, appears in the mood data table, and updates the chart. | ✅ |
| 1.2 | Add multiple mood entries | 1. Add 5 mood entries with varying values.<br>2. Verify that all appear in the mood log and chart. | All 5 entries appear in the mood log and are reflected in the chart. | ✅ |
| 1.3 | Add mood entry exceeding max limit | 1. Add 8 mood entries.<br>2. Check if the oldest entry is removed. | The app keeps only the last 7 entries, and the oldest one is deleted. | ✅ |

---

### **UC2** View Mood History
| **Test Case** | **Description** | **Steps** | **Expected Result** | **Status** |
|---------------|-----------------|-----------|----------------------|------------|
| 2.1 | View saved mood logs | 1. Open the app.<br>2. Click "Show Saved Data".<br>3. Verify that the saved mood logs are displayed. | All saved mood entries appear in a list or table format. | ✅ |
| 2.2 | View moods when no data exists | 1. Clear all mood data.<br>2. Click "Show Saved Data". | A message like "No mood data available" is displayed. | ❌ |

---

### **UC3** Delete Mood Data
| **Test Case** | **Description** | **Steps** | **Expected Result** | **Status** |
|---------------|-----------------|-----------|----------------------|------------|
| 3.1 | Delete all mood entries | 1. Add 3 mood entries.<br>2. Click "Delete All".<br>3. Confirm the action. | All mood data is cleared, and the mood log and chart are empty. | ✅ |
| 3.2 | Attempt deletion without confirmation | 1. Add mood entries.<br>2. Click "Delete All".<br>3. Cancel the confirmation dialog. | Mood data remains unchanged. | ✅ |

---

### **UC4** Display Chart
| **Test Case** | **Description** | **Steps** | **Expected Result** | **Status** |
|---------------|-----------------|-----------|----------------------|------------|
| 4.1 | Display chart with mood data | 1. Add 3 mood entries.<br>2. View the chart. | The chart displays 3 data points, with correct values on the x and y axes. | ✅ |
| 4.2 | Display chart without data | 1. Clear all mood data.<br>2. View the chart. | The chart is empty, with no points displayed. | ✅ |
| 4.3 | Update chart with new data | 1. Add 4 mood entries.<br>2. View the chart.<br>3. Add another mood entry and refresh the chart. | The chart updates to include the new data. | ✅ |

---

### **UC5** Toggle Between Views
| **Test Case** | **Description** | **Steps** | **Expected Result** | **Status** |
|---------------|-----------------|-----------|----------------------|------------|
| 5.1 | Switch to saved moods view | 1. Click "Show Saved Data".<br>2. Verify that the saved mood data section is visible. | The mood data section is displayed, and the form is hidden. | ✅ |
| 5.2 | Switch to mood log form | 1. Click "Log a Mood".<br>2. Verify that the form is visible. | The form is displayed, and the saved mood data section is hidden. | ✅ |

---

### **UC6** Edge Cases
| **Test Case** | **Description** | **Steps** | **Expected Result** | **Status** |
|---------------|-----------------|-----------|----------------------|------------|
| 6.1 | Enter invalid mood value | 1. Enter a negative value (-3).<br>2. Attempt to save the mood. | An error message is displayed, and the mood is not saved. | ✅ |
| 6.2 | Enter excessively high mood value | 1. Enter a value greater than 10 (e.g., 15).<br>2. Attempt to save the mood. | An error message is displayed, and the mood is not saved. | ✅ |
| 6.3 | Handle empty input | 1. Leave the mood input blank.<br>2. Attempt to save. | An error message is displayed, and no data is saved. | ✅ |
