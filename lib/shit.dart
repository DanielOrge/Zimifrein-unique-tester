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
            children: [
              Text(
                LocalizationKeys.sendGiftTitle.tr,
                style: TextStyleUtil.sfTextStyle(
                  textStyle: SfTextStyle.regular,
                  fontSize: 18,
                  fontHeight: 1.5,
                  color: UserDataManager.getInstance()
                      .axianAppTheme
                      ?.textColorPrimary,
                ),
              ),
              SizedBox(
                height: screenSize * 0.01,
                width: 0.0,
              ),
              Row(
                children: [
                  Expanded(
                    child: Text(
                      isDiscountOffer
