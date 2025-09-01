using System.Collections.Generic;
using Boost.Core.AppDotGraphQlClient.Responses;
using Boost.Core.Cms.Interfaces;
using Boost.Core.Handlers.Abstractions;
using Boost.Core.Models.Abstractions;
using Boost.Core.Models.ConfigModels;
using Boost.Core.Models.ContentModels;
using Boost.Core.Models.TicketingModels.UserSessionModels;
using FakeItEasy;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
namespace Boost.Web.Tests.Filters;
public sealed class ScopedDataFilterHelper
{
    public readonly IScopedRequestData ScopedRequestData = A.Fake<IScopedRequestData>();
    public readonly ICircuitRetriever CircuitRetriever = A.Fake<ICircuitRetriever>();
    public readonly ICircuitLiteResolver CircuitLiteResolver = A.Fake<ICircuitLiteResolver>();
    public readonly ITokenHandler TokenHandler = A.Fake<ITokenHandler>();
    public readonly HttpContext Context = new DefaultHttpContext();
    public readonly Dictionary<string, object> ActionArguments = new();
    public ActionExecutingContext ActionExecutedContext;
    public readonly ActionExecutionDelegate Next = A.Fake<ActionExecutionDelegate>();
    public const int CinemaId = 101;
    public const int CircuitId = 202;
    public const int CinemaId2 = 102;
    public const int CircuitId2 = 222;
    public const string TestToken = "some_test_token";
    public const string LanguageCulture = "some_culture";
    public const string PlatformVersion = "some_platform_version";
    public readonly BookingDataToken BookingDataToken = new()
    {
        CinemaId = CinemaId,
        CircuitId = CircuitId,
        ExternalCinemaId = "some_external_cinema_id",
        ExternalOrderId = "some_external_order_id",
        ExternalSessionId = "some_external_session_id",
        IsPaymentWithGiftCardEnabled = true,
        IsReservedSeating = true,
        LoyaltyCardBalance = 100,
        LoyaltyCardNumber = "some_loyalty_card_number",
        LoyaltyMember = null,
        OrderId = 101010,
        PlatformVersion = PlatformVersion,
        SelectedLanguageCulture = LanguageCulture,
        SessionId = 12345,
        TotalCharge = 100,
        UserSessionId = "some_user_session_id"
    };
    public readonly Circuit Circuit = new()
    {
        Config = new Config
        {
            CircuitId = CircuitId,
            CurrentCinema = new Cinema
            {
                CinemaId = CinemaId,
                Title = "A nice cinema"
            },
            LanguageCulture = "some_default_language",
            Payment = new Core.Models.ConfigModels.Payment
            {
                AlwaysCreateGuestMember = false
            },
            Tickets = new Core.Models.ConfigModels.Tickets
            {
                PricesSorting = Core.Enums.PricesSorting.Cheaper_First,
                ServiceChargeIsFree = false
            }
        },
        Content = new Content
        {
            DescriptionText = "some_description",
            Title = "some_title"
        },
        Journeys =
        [
            new Journey
            {
                Title = "title"
            }
        ]
    };
    public readonly Circuit Circuit2 = new()
    {
        Config = new Config
        {
            CircuitId = CircuitId2,
            CurrentCinema = new Cinema
            {
                CinemaId = CinemaId2,
                Title = "A nicer cinema"
            },
            LanguageCulture = "some_default_other_language",
            Payment = new Core.Models.ConfigModels.Payment
            {
                AlwaysCreateGuestMember = false
            },
            Tickets = new Core.Models.ConfigModels.Tickets
            {
                PricesSorting = Core.Enums.PricesSorting.Cheaper_First,
                ServiceChargeIsFree = false
            }
        },
        Content = new Content
        {
            DescriptionText = "some_other_description",
            Title = "some_other_title"
        },
        Journeys =
        [
            new Journey
            {
                Title = "other title"
            }
        ]
    };
}
