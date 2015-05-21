test(
  'MaurizioTest',

  [
    'ephox.compass.Obj',
    'ephox.snooker.model.Warefun'
  ],

  function (Obj, Warefun) {
    /* global assert */


    var testA = [
      [ 'td1', 'td1', 'td1', 'td2', 'td3' ]
    ];

    var expectedA = [{
      element: 'tr',
      cells: [
        {
          element: 'td1',
          colspan: 3,
          rowspan: 1
        },
        {
          element: 'td2',
          colspan: 1,
          rowspan: 1
        },
        {
          element: 'td3',
          colspan: 1,
          rowspan: 1
        }
      ]
    }];

    var testB = [
      [ 'td1', 'td1', 'td1', 'td2', 'td3' ],
      [ 'td1', 'td1', 'td1', 'td2', 'td4' ]
    ];

    var expectedB = [{
      element: 'tr',
      cells: [
        {
          element: 'td1',
          colspan: 3,
          rowspan: 2
        },
        {
          element: 'td2',
          colspan: 1,
          rowspan: 2
        },
        {
          element: 'td3',
          colspan: 1,
          rowspan: 2
        }
      ]
    },{
      element: 'tr',
      cells: [
      {
          element: 'td4',
          colspan: 1,
          rowspan: 1
        }
      ]
    }];






    var resultA = Warefun.render(testA);
    console.dir(resultA)
    console.log('resultA', resultA);
    // console.log('expectedA', expectedA);
    assert.eq(resultA, expectedA);

    console.log('resultA',resultA);



  }
);