export interface StatisticalDateInput {
  month: number;
  year: number;
}
export interface StatisticalThisMonthOutput{
  name:{
    cloth:{
      name: string
    },
    size:{
      name: string
    },
    color:{
      name: string
    }
  },
  sum: number
}
