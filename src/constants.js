const ICONS = {
  logo:
    'M15.6446667,18.3306667 L1.18333333,18.3306667 C0.530666667,18.3306667 0,17.8 0,17.1473333 L0,2.68333333 C0,2.03066667 0.530666667,1.5 1.18333333,1.5 L15.6446667,1.5 C16.2993333,1.5 16.828,2.03066667 16.828,2.68333333 L16.828,5.16666667 L18.8166667,5.16666667 C19.472,5.16666667 20,5.696 20,6.35 C20,7.004 19.472,7.53333333 18.8166667,7.53333333 L15.6446667,7.53333333 C14.992,7.53333333 14.4613333,7.004 14.4613333,6.35 L14.4613333,3.868 L2.36666667,3.868 L2.36666667,15.9626667 L14.4613333,15.9626667 L14.4613333,10.094 C14.4613333,9.44 14.992,8.90933333 15.6446667,8.90933333 L18.8166667,8.90933333 C19.472,8.90933333 20,9.44 20,10.094 C20,10.7466667 19.472,11.2773333 18.8166667,11.2773333 L16.828,11.2773333 L16.828,17.1473333 C16.828,17.8 16.2993333,18.3306667 15.6446667,18.3306667',
  dashboard:
    'M1.46982 11.00554C.65967 11.00554 0 10.34587 0 9.53509V1.53458C0 .68824.68824 0 1.53458 0h5.88435c.81015 0 1.46982.65967 1.46982 1.47045V9.5351c0 .81078-.65967 1.47045-1.46982 1.47045H1.46982zM.95237 1.53458v8.0005c0 .28572.23237.5181.51745.5181h5.94911c.28507 0 .51745-.23238.51745-.5181V1.47046c0-.2857-.23238-.51808-.51745-.51808H1.53458c-.32127 0-.58221.26158-.58221.5822zM11.52267 20c-.81014 0-1.46981-.65967-1.46981-1.47045v-8.5294c0-.84633.68824-1.53457 1.53458-1.53457h5.88371c.81078 0 1.47045.65967 1.47045 1.46982v8.59415c0 .81078-.65967 1.47045-1.47045 1.47045h-5.94848zm-.51745-9.99984v8.52939c0 .2857.23238.51808.51745.51808h5.94848c.28571 0 .51809-.23237.51809-.51808V9.9354c0-.28508-.23238-.51745-.51809-.51745h-5.88371c-.32127 0-.58222.26094-.58222.5822zm.51745-3.22757c-.81014 0-1.46981-.65967-1.46981-1.46982v-3.7682C10.05286.68825 10.7411 0 11.58744 0h5.88371c.81078 0 1.47045.65967 1.47045 1.47045v3.83232c0 .81015-.65967 1.46982-1.47045 1.46982h-5.94848zm-.51745-5.23801v3.7682c0 .28507.23238.51745.51745.51745h5.94848c.28571 0 .51809-.23238.51809-.51746V1.47045c0-.2857-.23238-.51808-.51809-.51808h-5.88371c-.32127 0-.58222.26158-.58222.5822zm-9.5354 18.4651C.65967 19.99968 0 19.34001 0 18.52986V14.2328c0-.84634.68824-1.53458 1.53458-1.53458h5.88435c.81015 0 1.46982.65967 1.46982 1.47045v4.3612c0 .81015-.65967 1.46982-1.46982 1.46982H1.46982zM.95237 14.2328v4.29707c0 .28508.23237.51746.51745.51746h5.94911c.28507 0 .51745-.23238.51745-.51746v-4.3612c0-.2857-.23238-.51808-.51745-.51808H1.53458c-.32127 0-.58221.26158-.58221.58221z',
  notification:
    'M9.64 3.023V1.51c0-.277.224-.503.502-.503s.503.226.503.503v1.513l.42.07c2.673.453 4.614 2.75 4.614 5.464v4.79c0 .94.365 1.825 1.03 2.49l.418.418c.14.14.185.3.122.452-.055.132-.21.273-.478.273H3.512c-.27 0-.423-.14-.478-.273-.062-.15-.02-.31.122-.452l.417-.417c.666-.666 1.032-1.55 1.032-2.492v-4.79c0-2.712 1.94-5.01 4.614-5.462l.42-.07zm.697 15.97c-.657 0-1.216-.42-1.424-1.006h2.848c-.207.585-.767 1.006-1.423 1.006zM8.632 1.51v.676C5.692 2.88 3.6 5.494 3.6 8.556v4.79c0 .673-.263 1.305-.738 1.78l-.417.417c-.428.428-.56 1.02-.34 1.55.224.543.777.894 1.408.894H7.87C8.105 19.134 9.12 20 10.337 20c1.215 0 2.232-.866 2.466-2.013h3.97c.63 0 1.182-.35 1.407-.895.22-.527.088-1.12-.34-1.55l-.417-.416c-.475-.475-.737-1.107-.737-1.78v-4.79c0-3.062-2.093-5.676-5.034-6.37V1.51c0-.833-.677-1.51-1.51-1.51s-1.51.677-1.51 1.51z',
  equipment:
    'M12.2772563,16.9055742 C12.7299443,16.9055742 13.0969204,16.5385981 13.0969204,16.0859101 L13.0969204,4.58176095 C13.0969204,4.12907299 12.7299443,3.76209688 12.2772563,3.76209688 L1.80326095,3.76209688 C1.35057299,3.76209688 0.983596883,4.12907299 0.983596883,4.58176095 L0.983596883,16.0859101 C0.983596883,16.5385981 1.35057299,16.9055742 1.80326095,16.9055742 L12.2772563,16.9055742 Z M17.5794992,14.1139295 L17.5794992,15.4305067 C17.5794992,15.7021195 17.3593136,15.9223051 17.0877008,15.9223051 L14.0805172,15.9223051 L14.0805172,16.0859101 C14.0805172,17.0818236 13.2731698,17.889171 12.2772563,17.889171 L1.80326095,17.889171 C0.807347428,17.889171 5.68434189e-14,17.0818236 5.68434189e-14,16.0859101 L5.68434189e-14,4.58176095 C5.68434189e-14,3.58584743 0.807347428,2.7785 1.80326095,2.7785 L12.2772563,2.7785 C13.2731698,2.7785 14.0805172,3.58584743 14.0805172,4.58176095 L14.0805172,10.9610425 L17.0877008,10.9610425 C17.3593136,10.9610425 17.5794992,11.1812281 17.5794992,11.4528409 L17.5794992,13.1303326 L19.5082016,13.1303326 C19.7798143,13.1303326 20,13.3505183 20,13.622131 C20,13.8937438 19.7798143,14.1139295 19.5082016,14.1139295 L17.5794992,14.1139295 Z M16.5959023,14.9387083 L16.5959023,11.9446393 L14.0805172,11.9446393 L14.0805172,14.9387083 L16.5959023,14.9387083 Z M3.26503234,9.57970112 C5.35046629,7.48405917 8.73072892,7.47793315 10.816314,9.56531924 C11.0082903,9.75746136 11.3196798,9.75759575 11.5118219,9.56561942 C11.7039641,9.37364309 11.7040985,9.06225357 11.5121221,8.87011146 C9.04155236,6.39740822 5.03696965,6.40466569 2.56782832,8.88589323 C2.37623856,9.0784208 2.37699881,9.38980942 2.56952638,9.58139918 C2.76205396,9.77298894 3.07344258,9.77222869 3.26503234,9.57970112 Z M9.13819832,11.0727329 C7.97923528,9.91219732 6.10039553,9.91584555 4.94253212,11.0799974 C4.76981004,11.2536576 4.75120096,11.5279456 4.89888426,11.7233436 L6.64837525,14.038075 C6.84531816,14.2986479 7.23687471,14.2983816 7.43346301,14.037541 L9.18295399,11.7162524 C9.33044671,11.5205536 9.31136106,11.2461306 9.13819832,11.0727329 Z M5.96812265,11.5067627 C6.61909969,11.0838243 7.46198972,11.0819222 8.11303598,11.5016383 L7.04016241,12.9251662 L5.96812265,11.5067627 Z',
  search:
    'M13.2378311,13.899521 L13.899521,13.2378311 L20,19.3383101 L19.3383101,20 L13.2378311,13.899521 Z M8.42193687,16.8438737 C3.77062957,16.8438737 0,13.0732442 0,8.42193687 C0,3.77062957 3.77062957,0 8.42193687,0 C13.0732442,0 16.8438737,3.77062957 16.8438737,8.42193687 C16.8438737,13.0732442 13.0732442,16.8438737 8.42193687,16.8438737 Z M8.42193687,15.908103 C12.5564322,15.908103 15.908103,12.5564322 15.908103,8.42193687 C15.908103,4.28744149 12.5564322,0.935770763 8.42193687,0.935770763 C4.28744149,0.935770763 0.935770763,4.28744149 0.935770763,8.42193687 C0.935770763,12.5564322 4.28744149,15.908103 8.42193687,15.908103 Z',
  user:
    'M10.00013 0c1.94158 0 3.71492 1.06603 4.6273 2.78159.96889 1.82222.78857 3.96-.4965 5.86603-.18985.28127-.43937.5308-.72128.72127-1.09587.73905-2.26857 1.11301-3.41397 1.11301-.84635 0-1.67746-.20444-2.45206-.6165-1.71556-.91238-2.78159-2.68572-2.78159-4.6273C4.76203 2.34984 7.11187 0 10.00013 0zm3.34095 8.11492c1.0819-1.6038 1.2438-3.38476.44571-4.88571-.7473-1.40445-2.1981-2.27683-3.78666-2.27683-2.36318 0-4.28572 1.92254-4.28572 4.28572 0 1.5892.87238 3.04 2.2762 3.78666 1.50158.79746 3.2819.6362 4.88634-.44571.18159-.12254.34222-.28318.46413-.46413zM10 11.9049c5.60762 0 10 2.30095 10 5.2381v1.1111c0 .96318-.78286 1.74604-1.74603 1.74604H1.74603C.78286 20.00013 0 19.21727 0 18.2541v-1.11112c0-2.93714 4.39238-5.2381 10-5.2381zm9.04762 6.3492V17.143c0-2.32318-4.1435-4.28572-9.04762-4.28572-4.90413 0-9.04762 1.96254-9.04762 4.28571v1.11112c0 .43746.3562.79365.79365.79365h16.50794c.43746 0 .79365-.3562.79365-.79365z',
  arrow:
    'M10,13.00025 C9.86036998,13.00025 9.72073997,12.95125 9.61383573,12.85425 L4.1595382,7.85425 C3.9468206,7.65825 3.9468206,7.34225 4.1595382,7.14625 C4.37334667,6.95125 4.71805827,6.95125 4.93186673,7.14625 L10,11.79325 L15.0681333,7.14625 C15.2819417,6.95125 15.6266533,6.95125 15.8404618,7.14625 C16.0531794,7.34225 16.0531794,7.65825 15.8404618,7.85425 L10.3861643,12.85425 C10.27926,12.95125 10.13963,13.00025 10,13.00025',
  arrowUpDown:
    'M10,15.59994 C9.84641536,15.59994 9.69283072,15.5411459 9.57524248,15.4247575 L7.17548245,13.0249975 C6.94150585,12.789821 6.94150585,12.4106589 7.17548245,12.1754825 C7.41065893,11.9415058 7.78982102,11.9415058 8.0249975,12.1754825 L10,14.1516848 L11.9750025,12.1754825 C12.210179,11.9415058 12.5893411,11.9415058 12.8245175,12.1754825 C13.0584942,12.4106589 13.0584942,12.789821 12.8245175,13.0249975 L10.4247575,15.4247575 C10.3071693,15.5411459 10.1535846,15.59994 10,15.59994 Z M10,4 C10.1535846,4 10.3071693,4.05879412 10.4247575,4.17518248 L12.8245175,6.57494251 C13.0584942,6.81011899 13.0584942,7.18928107 12.8245175,7.42445755 C12.5893411,7.65843416 12.210179,7.65843416 11.9750025,7.42445755 L10,5.44825517 L8.0249975,7.42445755 C7.78982102,7.65843416 7.41065893,7.65843416 7.17548245,7.42445755 C6.94150585,7.18928107 6.94150585,6.81011899 7.17548245,6.57494251 L9.57524248,4.17518248 C9.69283072,4.05879412 9.84641536,4 10,4 Z',
  closeSmall:
    'M10.8608669,10 L19.8217086,18.9608417 C20.0594305,19.1985636 20.0594305,19.5839868 19.8217086,19.8217086 C19.5839868,20.0594305 19.1985636,20.0594305 18.9608417,19.8217086 L10,10.8608669 L1.03915826,19.8217086 C0.801436435,20.0594305 0.416013199,20.0594305 0.178291371,19.8217086 C-0.059430457,19.5839868 -0.059430457,19.1985636 0.178291371,18.9608417 L9.13913311,10 L0.178291371,1.03915826 C-0.059430457,0.801436435 -0.059430457,0.416013199 0.178291371,0.178291371 C0.416013199,-0.059430457 0.801436435,-0.059430457 1.03915826,0.178291371 L10,9.13913311 L18.9608417,0.178291371 C19.1985636,-0.059430457 19.5839868,-0.059430457 19.8217086,0.178291371 C20.0594305,0.416013199 20.0594305,0.801436435 19.8217086,1.03915826 L10.8608669,10 Z',
  closeTiny:
    'M10,9.5008658 L15.3974917,4.10337408 C15.5353238,3.96554197 15.7587938,3.96554197 15.8966259,4.10337408 C16.034458,4.24120618 16.034458,4.46467617 15.8966259,4.60250828 L10.4991342,10 L15.8966259,15.3974917 C16.034458,15.5353238 16.034458,15.7587938 15.8966259,15.8966259 C15.7587938,16.034458 15.5353238,16.034458 15.3974917,15.8966259 L10,10.4991342 L4.60250828,15.8966259 C4.46467617,16.034458 4.24120618,16.034458 4.10337408,15.8966259 C3.96554197,15.7587938 3.96554197,15.5353238 4.10337408,15.3974917 L9.5008658,10 L4.10337408,4.60250828 C3.96554197,4.46467617 3.96554197,4.24120618 4.10337408,4.10337408 C4.24120618,3.96554197 4.46467617,3.96554197 4.60250828,4.10337408 L10,9.5008658 Z',
  co2:
    'M6.39649048,6.49619048 C5.2403,6.49619048 4.29839524,7.43714286 4.29839524,8.59428571 C4.29839524,8.85142857 4.09649048,9.06857143 3.8403,9.07809524 C2.22125238,9.1352381 0.952680952,10.4504762 0.952680952,12.0695238 C0.952680952,13.7228571 2.29744286,15.067619 3.95172857,15.067619 L16.0488714,15.067619 C17.432681,15.067619 19.047919,14.4180952 19.047919,12.5847619 C19.047919,11.3438095 18.2774429,10.3466667 17.0364905,9.98380952 C16.8136333,9.91904762 16.6698238,9.70095238 16.6983952,9.46857143 C16.7174429,9.30857143 16.7317286,9.14666667 16.7317286,8.98095238 C16.7317286,6.76 14.9241095,4.95238095 12.7031571,4.95238095 C11.0898238,4.95238095 9.6355381,5.91238095 8.99934762,7.39428571 C8.93077619,7.55619048 8.77744286,7.66761905 8.60125238,7.68095238 C8.42220476,7.69619048 8.25649048,7.61238095 8.16125238,7.46380952 C7.77268095,6.85904762 7.11268095,6.49619048 6.39649048,6.49619048 M16.0488714,16.02 L3.95172857,16.02 C1.77268095,16.02 0.0003,14.247619 0.0003,12.0695238 C0.0003,10.0809524 1.45268095,8.44 3.37839524,8.1647619 C3.58982381,6.68190476 4.86220476,5.54380952 6.39649048,5.54380952 C7.17744286,5.54380952 7.91172857,5.84 8.46887143,6.35714286 C9.36791905,4.90571429 10.9603,4 12.7031571,4 C15.4488714,4 17.6841095,6.23428571 17.6841095,8.98095238 C17.6841095,9.05428571 17.6822048,9.12666667 17.6783952,9.19904762 C19.1012524,9.76666667 20.0003,11.0590476 20.0003,12.5847619 C20.0003,14.64 18.412681,16.02 16.0488714,16.02 Z M6.73925238,9.1747619 C6.92782381,9.1747619 7.10401429,9.20238095 7.26877619,9.2547619 C7.4335381,9.30714286 7.59734762,9.37190476 7.76210952,9.45 L8.12972857,8.50333333 C7.69163333,8.29285714 7.23258571,8.18904762 6.75163333,8.18904762 C6.31068095,8.18904762 5.92782381,8.28333333 5.60210952,8.47190476 C5.27639524,8.65952381 5.02687143,8.92714286 4.8535381,9.2747619 C4.68020476,9.6252381 4.5935381,10.03 4.5935381,10.49 C4.5935381,11.2261905 4.77258571,11.79 5.13068095,12.1785714 C5.48877619,12.5690476 6.00401429,12.7633333 6.67544286,12.7633333 C7.14401429,12.7633333 7.56401429,12.6814286 7.93544286,12.517619 L7.93544286,11.4995238 C7.74877619,11.577619 7.5630619,11.6433333 7.3783,11.6985714 C7.1935381,11.7528571 7.0030619,11.7804762 6.80591905,11.7804762 C6.15449048,11.7804762 5.82877619,11.3528571 5.82877619,10.497619 C5.82877619,10.0842857 5.90877619,9.76047619 6.06972857,9.52619048 C6.22972857,9.29190476 6.45258571,9.1747619 6.73925238,9.1747619 Z M12.9661095,10.4712381 C12.9661095,9.72171429 12.7832524,9.15219048 12.4184905,8.76552381 C12.0527762,8.37695238 11.5165857,8.18361905 10.8080143,8.18361905 C10.1023,8.18361905 9.56420476,8.37885714 9.19372857,8.76933333 C8.82325238,9.15980952 8.63849048,9.72552381 8.63849048,10.4655238 C8.63849048,11.2150476 8.82420476,11.7845714 9.19658571,12.1769524 C9.56896667,12.5674286 10.1042048,12.7626667 10.8023,12.7626667 C11.5108714,12.7626667 12.0480143,12.5693333 12.4156333,12.1788571 C12.7823,11.7902857 12.9661095,11.2207619 12.9661095,10.4712381 Z M9.90420476,10.4712381 C9.90420476,9.60457143 10.2051571,9.16933333 10.8080143,9.16933333 C11.1042048,9.16933333 11.3270619,9.27504762 11.4765857,9.48742857 C11.6251571,9.69885714 11.7003952,10.028381 11.7003952,10.4712381 C11.7003952,10.9140952 11.6261095,11.2398095 11.4794429,11.4493333 C11.3327762,11.6579048 11.1061095,11.7617143 10.8023,11.7617143 C10.2032524,11.7617143 9.90420476,11.3321905 9.90420476,10.4712381 Z M15.5650619,13.7413333 L15.5650619,13.0813333 L14.4431571,13.0813333 L14.4431571,13.060381 C14.7717286,12.7651429 14.9869667,12.5660952 15.087919,12.4594286 C15.187919,12.3537143 15.2688714,12.2537143 15.3298238,12.1584762 C15.3907762,12.0632381 15.4355381,11.9651429 15.4650619,11.8660952 C15.4936333,11.768 15.507919,11.6594286 15.507919,11.5441905 C15.507919,11.388 15.4669667,11.2489524 15.3841095,11.1241905 C15.3003,10.9975238 15.1831571,10.9032381 15.032681,10.8337143 C14.8822048,10.7670476 14.7107762,10.7337143 14.5183952,10.7337143 C14.3650619,10.7337143 14.227919,10.748 14.1050619,10.780381 C13.9831571,10.8099048 13.8698238,10.8565714 13.7650619,10.9137143 C13.6612524,10.9737143 13.532681,11.0699048 13.3803,11.208 L13.8203,11.7232381 C13.9403,11.6184762 14.0488714,11.540381 14.1441095,11.4870476 C14.2393476,11.4327619 14.3336333,11.4070476 14.4269667,11.4070476 C14.5174429,11.4070476 14.587919,11.4289524 14.6383952,11.4737143 C14.687919,11.5184762 14.712681,11.5784762 14.712681,11.6565714 C14.712681,11.7175238 14.7003,11.7765714 14.6755381,11.8346667 C14.6507762,11.8908571 14.6060143,11.9594286 14.5422048,12.0394286 C14.4793476,12.1175238 14.3441095,12.2660952 14.1364905,12.4822857 L13.412681,13.2146667 L13.412681,13.7413333 L15.5650619,13.7413333 Z',
  sites:
    'M19.0233867,5.44925051 L19.0233867,3.22661331 L14.3797891,3.22661331 L14.3797891,16.569004 L19.0233867,16.569004 L19.0233867,9.16760379 L16.3751112,9.16760379 C16.1054269,9.16760379 15.8868045,8.94898145 15.8868045,8.67929713 L15.8868045,5.93755717 C15.8868045,5.66787285 16.1054269,5.44925051 16.3751112,5.44925051 L19.0233867,5.44925051 Z M13.8914825,17.5456173 C13.6217982,17.5456173 13.4031758,17.326995 13.4031758,17.0573107 L13.4031758,2.73830666 C13.4031758,2.46862234 13.6217982,2.25 13.8914825,2.25 L19.5116933,2.25 C19.7813777,2.25 20,2.46862234 20,2.73830666 L20,17.0573107 C20,17.326995 19.7813777,17.5456173 19.5116933,17.5456173 L13.8914825,17.5456173 Z M18.6285445,8.19099048 L18.6285445,6.42586383 L16.8634178,6.42586383 L16.8634178,8.19099048 L18.6285445,8.19099048 Z M0.651075543,8.42118586 L10.8143825,8.42118586 C11.1739616,8.42118586 11.465458,8.71268231 11.465458,9.0722614 L11.465458,16.7430775 C11.465458,17.1026566 11.1739616,17.394153 10.8143825,17.394153 L0.651075543,17.394153 C0.29149645,17.394153 0,17.1026566 0,16.7430775 L0,9.0722614 C0,8.71268231 0.29149645,8.42118586 0.651075543,8.42118586 Z M0.976613314,16.4175397 L10.4888447,16.4175397 L10.4888447,9.39779917 L0.976613314,9.39779917 L0.976613314,16.4175397 Z M2.66751912,13.8711715 C2.3978348,13.8711715 2.17921247,13.6525491 2.17921247,13.3828648 L2.17921247,11.3878039 C2.17921247,11.1181196 2.3978348,10.8994972 2.66751912,10.8994972 L4.58776525,10.8994972 C4.85744957,10.8994972 5.07607191,11.1181196 5.07607191,11.3878039 L5.07607191,13.3828648 C5.07607191,13.6525491 4.85744957,13.8711715 4.58776525,13.8711715 L2.66751912,13.8711715 Z M4.0994586,12.8945581 L4.0994586,11.8761105 L3.15582578,11.8761105 L3.15582578,12.8945581 L4.0994586,12.8945581 Z M6.15700635,13.8711715 C5.88732203,13.8711715 5.6686997,13.6525491 5.6686997,13.3828648 L5.6686997,11.3878039 C5.6686997,11.1181196 5.88732203,10.8994972 6.15700635,10.8994972 L8.07725248,10.8994972 C8.3469368,10.8994972 8.56555914,11.1181196 8.56555914,11.3878039 L8.56555914,13.3828648 C8.56555914,13.6525491 8.3469368,13.8711715 8.07725248,13.8711715 L6.15700635,13.8711715 Z M7.58894582,12.8945581 L7.58894582,11.8761105 L6.64531301,11.8761105 L6.64531301,12.8945581 L7.58894582,12.8945581 Z',
  star:
    'M10 16.5836L3.81966 20 5 12.76393 0 7.63932l6.90983-1.05573L10 0l3.09017 6.5836L20 7.63931l-5 5.12461L16.18034 20z',
  time:
    'M13.6400571,12.9488162 L14.0628173,14.3547151 L9.39994776,10.1562486 L11.9490167,7.32522068 L12.2056925,8.17880215 L10.4759671,10.0998568 L13.6400571,12.9488162 Z M10,18 C5.581722,18 2,14.418278 2,10 C2,5.581722 5.581722,2 10,2 C14.418278,2 18,5.581722 18,10 C18,14.418278 14.418278,18 10,18 Z M10,17.2380952 C13.9974896,17.2380952 17.2380952,13.9974896 17.2380952,10 C17.2380952,6.00251038 13.9974896,2.76190476 10,2.76190476 C6.00251038,2.76190476 2.76190476,6.00251038 2.76190476,10 C2.76190476,13.9974896 6.00251038,17.2380952 10,17.2380952 Z',
  checkboxUnchecked:
    'M0.973815179,9.97619048 C0.973815179,14.9475957 5.00450683,18.9785658 9.97619048,18.9785658 C14.9478741,18.9785658 18.9785658,14.9475957 18.9785658,9.97619048 C18.9785658,5.00478525 14.9478741,0.973815179 9.97619048,0.973815179 C5.00450683,0.973815179 0.973815179,5.00478525 0.973815179,9.97619048 Z M-0.0238095238,9.97619048 C-0.0238095238,4.45382777 4.4535185,-0.0238095238 9.97619048,-0.0238095238 C15.4988625,-0.0238095238 19.9761905,4.45382777 19.9761905,9.97619048 C19.9761905,15.4985532 15.4988625,19.9761905 9.97619048,19.9761905 C4.4535185,19.9761905 -0.0238095238,15.4985532 -0.0238095238,9.97619048 Z',
  checkboxChecked:
    'M0.973815179,9.97619048 C0.973815179,14.9475957 5.00450683,18.9785658 9.97619048,18.9785658 C14.9478741,18.9785658 18.9785658,14.9475957 18.9785658,9.97619048 C18.9785658,5.00478525 14.9478741,0.973815179 9.97619048,0.973815179 C5.00450683,0.973815179 0.973815179,5.00478525 0.973815179,9.97619048 Z M-0.0238095238,9.97619048 C-0.0238095238,4.45382777 4.4535185,-0.0238095238 9.97619048,-0.0238095238 C15.4988625,-0.0238095238 19.9761905,4.45382777 19.9761905,9.97619048 C19.9761905,15.4985532 15.4988625,19.9761905 9.97619048,19.9761905 C4.4535185,19.9761905 -0.0238095238,15.4985532 -0.0238095238,9.97619048 Z M16.1408404,4.73311091 L9.88952175,14.5204161 C9.76586696,14.5661246 9.62185788,14.5250008 9.54279358,14.4120852 L5.88891467,9.19380537 C5.73090214,8.96814008 5.4198698,8.91329669 5.19420451,9.07130923 C4.96853921,9.22932177 4.91369582,9.5403541 5.07170836,9.7660194 L8.72558726,14.9842993 C9.13561803,15.5698839 9.94349874,15.7123351 10.5290834,15.3023043 L10.6633564,15.1622051 L16.9816006,5.27011875 C17.1298912,5.03794924 17.0618939,4.72952537 16.8297244,4.58123475 C16.5975549,4.43294413 16.289131,4.50094141 16.1408404,4.73311091 Z',
  checkboxSolidChecked:
    'M0,10 C0,4.47763729 4.47732802,0 10,0 C15.522672,0 20,4.47763729 20,10 C20,15.5223627 15.522672,20 10,20 C4.47732802,20 0,15.5223627 0,10 Z M16.1646499,3.75692043 L9.91333127,13.5442256 C9.78967649,13.5899341 9.6456674,13.5488103 9.5666031,13.4358948 L5.9127242,8.2176149 C5.75471166,7.99194961 5.44367932,7.93710621 5.21801403,8.09511875 C4.99234874,8.25313129 4.93750534,8.56416363 5.09551788,8.78982892 L8.74939679,14.0081088 C9.15942755,14.5936934 9.96730827,14.7361446 10.5528929,14.3261138 L10.6871659,14.1860146 L17.0054101,4.29392827 C17.1537007,4.06175877 17.0857034,3.7533349 16.8535339,3.60504428 C16.6213644,3.45675366 16.3129406,3.52475093 16.1646499,3.75692043 Z',
};

export default ICONS;