<style>
    .collapse-trigger {
        padding: 4px 0px 4px 0px;
    }
    .collapse-trigger.remainder {
        border-bottom: 2px solid #333;
    }
</style>

<template>
    <div class="mui-panel">
        <p>
            Ok Dylan, let's keep it real basic...in order to save money for projects or get out of debt you must have a balance at the end of this simple equation:<br />
        </p>
        <div class="income-wrapper">
            <div class="collapse-trigger" data-pane="income">
                <h2>Income<span class="icon-plus"></span></h2>
            </div>
            <div class="collapsible income">
                <ul>
                    <li v-for="i in income">
                        <table>
                            <tr>
                                <td>{{i.title}}</td>
                                <td><strong>{{i.amount}}</strong></td>
                            </tr>
                        </table>

                    </li>
                </ul>
            </div>
        </div>
        <div class="bills-wrapper">
            <div class="collapse-trigger" data-pane="bills">
                <h2>-Bills<span class="icon-plus"></span></h2>
            </div>
            <div class="collapsible bills">
                <ul>
                    <li v-for="b in bills">
                        <table>
                            <tr>
                                <td>{{b.title}}</td>
                                <td><strong>{{b.amount}}</strong></td>
                            </tr>
                        </table>

                    </li>
                </ul>
            </div>
        </div>
        <div class="expenses-wrapper">
            <div class="collapse-trigger" data-pane="expenses">
                <h2>-Expenses<span class="icon-plus"></span></h2>
            </div>
            <div class="collapsible expenses">
                <ul>
                    <li v-for="e in expenses">
                        <table>
                            <tr>
                                <td>{{e.title}}</td>
                                <td><strong>{{e.amount}}</strong></td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </div>
        </div>
        <div class="remainder-wrapper">
            <div class="collapse-trigger" data-pane="remainder">
                <table>
                    <tr>
                        <td>
                            <h2>=Remainder between</h2>
                        </td>
                        <td>
                            <div class="mui-dropdown">
                                <button class="mui-btn mui-btn--flat" data-mui-toggle="dropdown">
                                    August
                                    <span class="mui-caret"></span>
                                </button>
                                <ul class="mui-dropdown__menu">
                                    <li><a href="#"></a></li>
                                    <li><a href="#">Option 2</a></li>
                                    <li><a href="#">Option 3</a></li>
                                    <li><a href="#">Option 4</a></li>
                                    <li><a href="#">Option 1</a></li>
                                    <li><a href="#">Option 2</a></li>
                                    <li><a href="#">Option 3</a></li>
                                    <li><a href="#">Option 4</a></li>
                                    <li><a href="#">Option 1</a></li>
                                    <li><a href="#">Option 2</a></li>
                                    <li><a href="#">Option 3</a></li>
                                    <li><a href="#">Option 4</a></li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div class="mui-dropdown">
                                <button class="mui-btn mui-btn--flat" data-mui-toggle="dropdown">
                                    2017
                                    <span class="mui-caret"></span>
                                </button>
                                <ul class="mui-dropdown__menu">
                                    <li><a href="#">Option 1</a></li>
                                    <li><a href="#">Option 2</a></li>
                                    <li><a href="#">Option 3</a></li>
                                    <li><a href="#">Option 4</a></li>
                                </ul>
                            </div>
                        </td>
                        <td>and</td>
                        <td>
                            <div class="mui-dropdown">
                                <button class="mui-btn mui-btn--flat" data-mui-toggle="dropdown">
                                    septeber
                                    <span class="mui-caret"></span>
                                </button>
                                <ul class="mui-dropdown__menu">
                                    <li><a href="#"></a></li>
                                    <li><a href="#">Option 2</a></li>
                                    <li><a href="#">Option 3</a></li>
                                    <li><a href="#">Option 4</a></li>
                                    <li><a href="#">Option 1</a></li>
                                    <li><a href="#">Option 2</a></li>
                                    <li><a href="#">Option 3</a></li>
                                    <li><a href="#">Option 4</a></li>
                                    <li><a href="#">Option 1</a></li>
                                    <li><a href="#">Option 2</a></li>
                                    <li><a href="#">Option 3</a></li>
                                    <li><a href="#">Option 4</a></li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <div class="mui-dropdown">
                                <button class="mui-btn mui-btn--flat" data-mui-toggle="dropdown">
                                    2017
                                    <span class="mui-caret"></span>
                                </button>
                                <ul class="mui-dropdown__menu">
                                    <li><a href="#">Option 1</a></li>
                                    <li><a href="#">Option 2</a></li>
                                    <li><a href="#">Option 3</a></li>
                                    <li><a href="#">Option 4</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </table>           
            </div>
            <div class="collapsible remainder">$12345.67</div>
        </div>
    </div>
</template>

<script>
    define(["Vue", "jquery"], function (Vue, $) {
        Date.prototype.addMonths = function (m) {
            var d = new Date(this);
            var years = Math.floor(m / 12);
            var months = m - (years * 12);
            if (years) d.setFullYear(d.getFullYear() + years);
            if (months) d.setMonth(d.getMonth() + months);
            return d;
        }

        Vue.component("BudgetMonster", {
            template: template,
            computed: {
                bills: function () { return this.$store.state.apps.filter(function (obj) { return obj.id === 'BudgetMonster' })[0].saves[0].bills },
                expenses: function () { return this.$store.state.apps.filter(function (obj) { return obj.id === 'BudgetMonster' })[0].saves[0].expenses },
                income: function () { return this.$store.state.apps.filter(function (obj) { return obj.id === 'BudgetMonster' })[0].saves[0].income }
            },
            data: function () {
                return {
                    showExpenses: false,
                    showIncome: false,
                    showBills: false,
                    showRemainder: false,
                    viewDateStart: new Date(),
                    viewDateEnd: new Date().addMonths(12)
                }
            },
            mounted: function () {
                $('.collapsible').hide();
                $('.collapse-trigger').on('click', function () {
                    $('.' + $(this).attr('data-pane')).slideToggle('fast');
                });
            }
        });
    });
</script>