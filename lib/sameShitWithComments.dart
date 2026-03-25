              const SizedBox(height: 10),
            ],
          ),
        ),
      ],
    );
  }
  Widget giftDetail(double screenSize) {
    return Row(
      children: [
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            // Align children to the left
            children: [
              // Display the title for the gift, using localized text and custom text style
              Text(
                LocalizationKeys.sendGiftTitle.tr, // Localized title text
                style: TextStyleUtil.sfTextStyle(
                  textStyle: SfTextStyle.regular, // Semibold font style
                  fontSize: 18, // Font size for the title
                  fontHeight: 1.5, // Line height for spacing between lines
                  color: UserDataManager.getInstance()
                      .axianAppTheme
                      ?.textColorPrimary, // Primary text color from the app theme
                ),
              ),
              SizedBox(
                height: screenSize * 0.01, // Vertical space between elements
                width: 0.0, // No horizontal space
              ),
              Row(
                children: [
                  // Display the offer name, conditional on whether it's a discount offer
                  Expanded(
                    child: Text(
                      isDiscountOffer
