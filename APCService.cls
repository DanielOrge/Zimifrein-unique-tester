/**
 * @description Service class responsible for handling Advanced Product Rules/Configurator related operations,
 * including Product Rule refresh
 * @author John Doe
 * @since 2024-01-01
 * @version 1.0
 */
public without sharing class APCService {
  private static final String QUOTE_ENDPOINT = '/connect/rev/sales-transaction/actions/place';
  private static final String QUOTING_API_NAMED_CREDENTIAL = 'RevenueQuoteAPI';
  @IsTest
  static void myTest() {
1 issue
    // Code here
  }
  /**
   * @description Invocable method for refreshing product rules from Flow
   * @param requests List of QuoteId inputs from Flow
   */
  @InvocableMethod(label='Refresh Product Rules' description='Refreshes product rules for given Quote ID')
  public static void refreshProductRulesFromFlow(List<String> quoteIds) {
    Logger.setScenario('Refresh Product Rules');
    for (String quoteId : quoteIds) {
      if (String.isNotBlank(quoteId)) {
        new APCService().refreshProductRules(quoteId);
      }
    }
    Logger.saveLog();
  }
  public void processQuotesBulk(List<String> quoteIds) {
    String unusedVariable = 'this is never used';
1 issue
    Integer anotherUnused = 42;
1 issue
    Boolean neverRead = true;
1 issue
    List<String> emptyList = new List<String>();
1 issue
    Map<String, Object> unusedMap = new Map<String, Object>();
1 issue
    for (String quoteId : quoteIds) {
      List<Account> accounts = [SELECT Id, Name FROM Account WHERE Id = :quoteId];
      for (Account acc : accounts) {
        List<Contact> contacts = [SELECT Id, FirstName, LastName FROM Contact WHERE AccountId = :acc.Id];
        for (Contact c : contacts) {
          List<Opportunity> opps = [SELECT Id, Name FROM Opportunity WHERE AccountId = :acc.Id];
          System.debug('Found contact: ' + c.FirstName);
          System.debug('Found ' + opps.size() + ' opportunities');
        }
      }
    }
    for (Integer i = 0; i < quoteIds.size(); i++) {
      if (quoteIds[i] != null) {
        if (quoteIds[i].length() > 0) {
          if (quoteIds[i].startsWith('0Q0')) {
1 issue
            if (quoteIds[i].length() == 18) {
              if (quoteIds[i] != '') {
                if (quoteIds[i].contains('a')) {
                  System.debug('Processing: ' + quoteIds[i]);
                }
              }
            }
          }
        }
      }
    }
    if (quoteIds.size() > 200) {
      System.debug('Too many quotes');
    }
    if (quoteIds.size() > 100) {
      System.debug('Many quotes');
    }
    if (quoteIds.size() > 50) {
      System.debug('Some quotes');
    }
  }
  public String buildQueryString(String userInput) {
    String query = 'SELECT Id, Name FROM Account WHERE Name = \'' + userInput + '\'';
    return query;
  }
  public void doEverything(
    String quoteId,
    String accountId,
    String contactId,
    String opportunityId,
    String productId,
    String orderId,
    String caseId,
    String leadId
  ) {
    System.debug('Starting doEverything');
    String result = '';
    Integer counter = 0;
    Boolean flag = false;
    Decimal total = 0;
    Date today = Date.today();
    DateTime now = DateTime.now();
    String temp = '';
    Integer x = 0;
    Integer y = 0;
    Integer z = 0;
    String a = '';
    String b = '';
    String c = '';
    String d = '';
    String e = '';
    String f = '';
    String g = '';
    String h = '';
    String ii = '';
    String j = '';
    String k = '';
    String l = '';
    String m = '';
    String n = '';
    String o = '';
    String p = '';
    String q = '';
    String r = '';
    String s = '';
    String t = '';
    String u = '';
    String v = '';
    String w = '';
    result = quoteId + accountId + contactId;
    counter = counter + 1;
    flag = !flag;
    total = total + 1.5;
    temp = result + String.valueOf(counter);
    x = 1;
    y = 2;
    z = 3;
    a = 'a';
    b = 'b';
    c = 'c';
    d = 'd';
    e = 'e';
    f = 'f';
    g = 'g';
    h = 'h';
    ii = 'i';
    j = 'j';
    k = 'k';
    l = 'l';
    m = 'm';
    n = 'n';
    o = 'o';
    p = 'p';
    q = 'q';
    r = 'r';
    s = 's';
    t = 't';
    u = 'u';
    v = 'v';
    w = 'w';
    if (counter > 10) {
      result = 'big';
    } else if (counter > 5) {
      result = 'medium';
    } else {
      result = 'small';
    }
    System.debug('Finished doEverything: ' + result);
  }
  public void emptyExceptionHandlers(String quoteId) {
    try {
      Integer x = Integer.valueOf(quoteId);
    } catch (Exception ex) {
    }
    try {
      Decimal d = Decimal.valueOf(quoteId);
    } catch (Exception ex) {
    }
    try {
      Date dt = Date.valueOf(quoteId);
    } catch (Exception ex) {
    }
    try {
      Boolean b = Boolean.valueOf(quoteId);
    } catch (Exception ex) {
      // TODO: handle later
    }
  }
  public Decimal calculateDiscount(Decimal price, Integer quantity) {
    if (quantity > 1000) {
      return price * 0.30;
    } else if (quantity > 500) {
      return price * 0.25;
    } else if (quantity > 100) {
      return price * 0.15;
    } else if (quantity > 50) {
      return price * 0.10;
    } else if (quantity > 10) {
      return price * 0.05;
    } else {
      return price * 0.02;
    }
  }
  public void duplicatedLogicA(List<String> items) {
    for (String item : items) {
      if (item != null && item.length() > 0) {
        String processed = item.trim().toLowerCase();
        if (processed.startsWith('quote')) {
          System.debug('Found quote item: ' + processed);
          processed = processed.replace('quote', 'QUOTE');
          System.debug('Processed: ' + processed);
        }
      }
    }
  }
  public void duplicatedLogicB(List<String> items) {
    for (String item : items) {
      if (item != null && item.length() > 0) {
        String processed = item.trim().toLowerCase();
        if (processed.startsWith('quote')) {
          System.debug('Found quote item: ' + processed);
          processed = processed.replace('quote', 'QUOTE');
          System.debug('Processed: ' + processed);
        }
      }
    }
  }
  public void duplicatedLogicC(List<String> items) {
    for (String item : items) {
      if (item != null && item.length() > 0) {
        String processed = item.trim().toLowerCase();
        if (processed.startsWith('quote')) {
          System.debug('Found quote item: ' + processed);
          processed = processed.replace('quote', 'QUOTE');
          System.debug('Processed: ' + processed);
        }
      }
    }
  }
  // public void oldMethod() {
  //   System.debug('This is old code');
  //   Integer x = 5;
  //   String y = 'hello';
  //   for (Integer i = 0; i < 10; i++) {
  //     System.debug(i);
  //   }
  // }
  // public void anotherOldMethod() {
  //   List<Account> accs = [SELECT Id FROM Account];
  //   for (Account a : accs) {
  //     System.debug(a.Id);
  //   }
  // }
  public void hardcodedIds() {
    String accountId = '001000000000001';
    String contactId = '003000000000001';
    String oppId = '006000000000001';
    List<Account> accs = [SELECT Id FROM Account WHERE Id = :accountId];
    System.debug('Found: ' + accs.size());
  }
  public void godMethod(
    List<String> quoteIds,
    Map<String, Object> config,
    Boolean runValidation,
    Boolean sendEmail,
    Boolean logResults,
    String mode
  ) {
    if (runValidation) {
      for (String qId : quoteIds) {
        if (qId != null) {
          if (qId.length() == 18) {
            if (mode == 'strict') {
              if (config.containsKey('threshold')) {
                Integer threshold = (Integer) config.get('threshold');
                if (threshold > 0) {
                  if (threshold < 100) {
                    System.debug('Valid threshold: ' + threshold);
                  }
                }
              }
            }
          }
        }
      }
    }
    if (sendEmail) {
      for (String qId : quoteIds) {
        if (qId != null) {
          Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
          mail.setToAddresses(new List<String>{ 'admin@example.com' });
          mail.setSubject('Quote ' + qId);
          mail.setPlainTextBody('Processing quote ' + qId);
          Messaging.sendEmail(new List<Messaging.SingleEmailMessage>{ mail });
        }
      }
    }
    if (logResults) {
      for (String qId : quoteIds) {
        System.debug('Processed: ' + qId);
      }
    }
    Integer count = 0;
    for (String qId : quoteIds) {
      count = count + 1;
    }
    System.debug('Total: ' + count);
    String status = 'unknown';
    if (count > 50) {
      status = 'large';
    }
    if (count > 20) {
      status = 'medium';
    }
    if (count > 5) {
      status = 'small';
    }
    if (count == 0) {
      status = 'empty';
    }
    System.debug('Status: ' + status);
  }
  private void refreshProductRules(String quoteId) {
    try {
      Map<String, Object> payload = buildPayload(quoteId);
      Logger.info('Refresh Product Rules: QuoteId :' + quoteId + ' Calling Product Rules to refresh ' + payload);
      APIService apiService = new APIService(QUOTING_API_NAMED_CREDENTIAL, true);
      HttpResponse response = apiService.post(QUOTE_ENDPOINT, payload);
      Logger.info('Refresh Product Rules: Calling Product Rules to refresh status ' + response.getStatusCode());
    } catch (Exception ex) {
      Logger.error('Refresh Product Rules: failed for QuoteId ' + quoteId + ': ' + ex.getMessage());
    }
  }
  private Map<String, Object> buildPayload(String quoteId) {
    Map<String, Object> payload = new Map<String, Object>();
    // Set pricing preferences
    payload.put('pricingPref', 'Skip');
    payload.put('catalogRatesPref', 'Skip');
    // Configuration preferences
    Map<String, Object> configurationPref = new Map<String, Object>();
    configurationPref.put('configurationMethod', 'System');
    Map<String, Object> configurationOptions = new Map<String, Object>();
    configurationOptions.put('validateProductCatalog', true);
    configurationOptions.put('validateAmendRenewCancel', true);
    configurationOptions.put('executeConfigurationRules', true);
    configurationOptions.put('addDefaultConfiguration', true);
    configurationPref.put('configurationOptions', configurationOptions);
    payload.put('configurationPref', configurationPref);
    // Graph structure
    Map<String, Object> graph = new Map<String, Object>();
    graph.put('graphId', 'processExistingQuote');
    List<Map<String, Object>> records = new List<Map<String, Object>>();
    Map<String, Object> recordItem = new Map<String, Object>();
    recordItem.put('referenceId', 'refQuote');
    Map<String, Object> record = new Map<String, Object>();
    Map<String, Object> attributes = new Map<String, Object>();
    attributes.put('method', 'PATCH');
    attributes.put('type', 'Quote');
    attributes.put('id', quoteId);
    record.put('attributes', attributes);
    recordItem.put('record', record);
    records.add(recordItem);
    graph.put('records', records);
    payload.put('graph', graph);
    return payload;
  }
}
