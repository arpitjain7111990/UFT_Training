'Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategoryTxt").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Bose Soundlink Bluetooth").Click
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity1").Set DataTable("Quantity", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Number_of _items_in_cart").Highlight
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Remove_cart_items").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
Browser("Advantage Shopping").CloseAllTabs

