<script>
export default {
  name: "Home",
  data() {
    return {
      time: "",
    };
  },
  methods: {
    setTime() {
      const h = document.getElementById("hour");
      const m = document.getElementById("min");

      if (h.value == "HH" || m.value == "MM") return;

      const radioBtn = document.getElementsByName("am-pm");
      let t;
      for (let i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked) t = radioBtn[i].value;
      }
      this.time = h.value + ":" + m.value + " " + t;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="inp-form">
      <h2>Enter Time</h2>
      /
      <!--  <input type="time" id="time" /> -->

      <div class="time-picker">
        <select class="select-time" id="hour" required>
          <option selected disabled>HH</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        <span id="colon">:</span>

        <select class="select-time" id="min" required>
          <option selected disabled>MM</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>
          <option>29</option>
          <option>30</option>
          <option>31</option>
          <option>32</option>
          <option>33</option>
          <option>34</option>
          <option>35</option>
          <option>36</option>
          <option>37</option>
          <option>38</option>
          <option>39</option>
          <option>40</option>
          <option>41</option>
          <option>42</option>
          <option>43</option>
          <option>44</option>
          <option>45</option>
          <option>46</option>
          <option>47</option>
          <option>48</option>
          <option>49</option>
          <option>50</option>
          <option>51</option>
          <option>52</option>
          <option>53</option>
          <option>54</option>
          <option>55</option>
          <option>56</option>
          <option>57</option>
          <option>58</option>
          <option>59</option>
          <option>60</option>
        </select>
        <br />

        <div class="am-pm-radio">
          <div>
            <input type="radio" name="am-pm" id="radio1" value="AM" />
            <label for="radio1">AM</label>
          </div>
          <div>
            <input type="radio" name="am-pm" id="radio2" value="PM" />
            <label for="radio2">PM</label>
          </div>
        </div>
      </div>
      <button v-on:click="setTime">set</button>

      <h1>{{ "selected time :- " + time }}</h1>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.inp-form {
  width: 500px;
  height: 200px;
  background-color: aqua;
}
input[type="time"]::-webkit-calendar-picker-indicator {
  background: none;
}

#time {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
}

button {
  padding: 2px 10px;
  font-weight: 600;
  background-color: white;
  border: none;
  margin-left: 10px;
}

#colon {
  font-size: 20px;
  font-weight: 600;
  padding: 0px 10px;
}

.select-time {
  border-radius: 5px;
  padding: 2px 5px;
  color: black;
}
.select-time::-webkit-scrollbar {
  width: 5px;
}

.select-time::-webkit-scrollbar-track {
  background-color: rgb(136, 197, 234);
}

/* Handle */
.select-time::-webkit-scrollbar-thumb {
  background: #47e105;
}

.time-picker {
  display: block;
}

.am-pm-radio {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 10px 2px;
}

input[type="radio"] {
  margin-right: 2px;
}

label {
  font-size: 17px;
  font-weight: 600;
}
</style>
