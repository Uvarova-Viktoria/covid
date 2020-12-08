## Структура и особенности работы приложения

1. `<GlobalTable>` Таблица, в которой отображаются следующие данные:
    - количество случаев заболевания 
    - количество летальных исходов
    - количество выздоровевших

  В таблице есть переключатели для отображения данных:
  - за весь период пандемии и за последний день (последнюю возвращаемую API дату)
  - в абсолютных величинах и из расчёта на 100 тыс. населения

  <details>
    <summary>Таким образом всего в таблице может отображаться 12 показателей</summary>

  1. общее количество случаев заболевания
  2. общее количество летальных исходов
  3. общее количество выздоровевших
  4. количество случаев заболевания за последний день
  5. количество летальных исходов за последний день
  6. количество выздоровевших за последний день
  7. общее количество случаев заболевания из расчёта на 100 тыс. населения
  8. общее количество летальных исходов из расчёта на 100 тыс. населения
  9. общее количество выздоровевших из расчёта на 100 тыс. населения
  10. количество случаев заболевания за последний день из расчёта на 100 тыс. населения
  11. количество летальных исходов за последний день из расчёта на 100 тыс. населения
  12. количество выздоровевших за последний день из расчёта на 100 тыс. населения
  </details>


  По умолчанию в таблице отображаются данные для мира в целом. Если пользователь выбирает определённую страну, в таблице отображаются данные для выбранной пользователем страны.  
  
  Страну можно выбрать:
  - кликом по пункту списка 
  - кликом по интерактивной карте
  - найти при помощи поиска 

2. `<CountriesTable>` Список стран для каждой из которых по умолчанию отображается общее количество случаев заболевания за весь период пандемии. У пользователя есть возможность выбрать для отображения в списке любой другой показатель из тех, которые могут отображаться в таблице. Список стран сортируется по убыванию по выбранному показателю. Работает поиск по названию страны. Для ввода поискового запроса может использоваться виртуальная клавиатура, созданная в одном из предыдущих заданий. Поиск работает "на лету": по мере ввода названия страны отображаются все соответствующие введённым символам результаты. Результат поиска можно выбрать кликом, даже если поисковый запрос ещё не был введён полностью. Возле каждой страны выводится изображение её флага.

3. `<Map>` Интерактивная карта на которой условными обозначениями: цветом или размером маркера указывается интенсивность распространения болезни в разных странах. По умолчанию интенсивность определяется по общему количеству случаев заболевания за весь период пандемии. У пользователя есть возможность выбрать для определения интенсивности распространения болезни любой другой показатель из тех, что могут отображаться в таблице.  
Карта интерактивная, есть возможность перетаскивать карту, уменьшать и увеличивать масштаб. При наведении курсора на страну появляется всплывающая подсказка - название страны и показатель, который в данный момент используется для определения интенсивности распространения болезни. У карты есть легенда. Для оформления карты используется кастомный дизайн. 


4. `<Graphic>` График по умолчанию строится по общему количеству случаев заболевания. При наведении курсора на график появляется всплывающая подсказка с датой, соответствующей этой точке графика и данными по этой дате. У пользователя есть возможность просмотреть график по любому из выбранных показателей из тех, которые выводятся в таблице, как для мира в целом, так и для любой выбранной страны.

Данные в приложении обновляться ежедневно, в соответствии с обновлением данных, предоставляемых API. В приложении указывается дата, за которую отображаются данные.

Переключение данных в разных блоках информации (таблица, список, карта, график) происходит согласованно. Это означает что при переключении данных для отображения в одном блоке информации или при выборе определённой страны, эти же данные для выбранной страны должны отображаться и в других блоках информации. Наличие отдельных переключателей для отображения данных в каждом блоке информации объясняется тем, что каждый блок информации можно развернуть в полный экран, как это реализовано в предложенной в качестве образца онлайн-карте распространения Covid-19.   