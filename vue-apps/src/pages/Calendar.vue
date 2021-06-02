<template>
    <div class="m-auto my-1">
      <h1 class="text-3xl  text-center">Vue Calendar</h1>
    
      <section class=" flex justify-between">
        <h2 class="font-bold mx-2" >{{currentMonthName}}</h2>
        <h2 class="font-bold ">{{currentYear}}</h2>
      </section>
     
      <section class="flex my-2" >
        
        <p class="text-center" style="width:14.28%" v-for:="day in days">{{day}}</p>

      </section>

      <section class="flex flex-wrap">
          <p  class="text-center" style="width:14.28%" v-for="num in startDay()" :key="num">
           
          </p>
          <p class="text-center"  style="width:14.28%" 
          v-for="num in numbersInMonth()"
           :key="num"
           :class="currentDateClass(num)">
          {{num}}
          </p>
      </section>
       
       <section class="flex justify-between my-4">
           <button class="px-3 border rounded" @click="prevMonth()">Prev</button>
           <button class="px-3 border rounded" @click="nextMonth()">Next</button>
       </section>
    </div>
</template>

<script>
    export default {
        
        data(){
            return {
                currentDate: new Date().getUTCDate(),
                currentMonth: new Date().getMonth(),
                currentYear: new Date().getFullYear(),
                days: ["Sun", "Mon", "Tue", 
                       "Wed", "Thur", "Fri",
                       "Sat"],
                

            }
        },
        methods: {
            numbersInMonth(){
                let number = new Date(this.currentYear,this.currentMonth+1,0).getDate()
                return number
            },
            startDay(){
                return new Date(this.currentYear, this.currentMonth,1).getDay()
            },
            nextMonth(){
                if(this.currentMonth == 11){
                    this.currentMonth =0
                    this.currentYear++
                }else{
                    this.currentMonth++
                }
                
            },
            prevMonth(){
                if(this.currentMonth ===0){
                    this.currentMonth = 11
                    this.currentYear--
                }else{
                    this.currentMonth--
                }
            },
            currentDateClass(num){
                const calendarFullDate = 
                new Date(
                          this.currentYear,
                          this.currentMonth,num).toDateString()
                const currentFullDate  = new Date().toDateString()
                return calendarFullDate == currentFullDate ?
                           'text-yellow-600':"";
               }
            
        },
        computed:{
            currentMonthName(){
                return new Date(this.currentYear,
                this.currentMonth).toLocaleString("default", {month:"long"})
            }
        }
    }
</script>

<style >

</style>