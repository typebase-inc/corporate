'use client'

import { useEffect, useId, useState } from 'react'

type CalculationMode = 'hourlyToMonthly' | 'monthlyToHourly'

export const ManHourRateCalculator = () => {
  const [mode, setMode] = useState<CalculationMode>('hourlyToMonthly')

  // Generate unique IDs for form elements
  const hourlyRateId = useId()
  const workHoursPerDayId = useId()
  const workDaysPerWeekId = useId()
  const workDaysPerMonthId = useId()
  const monthlyRateId = useId()
  const calculatedHourlyRateId = useId()

  // 入力値
  const [hourlyRate, setHourlyRate] = useState<number>(5_000)
  const [workHoursPerDay, setWorkHoursPerDay] = useState<number>(8)
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState<number>(5)
  const [workDaysPerMonth, setWorkDaysPerMonth] = useState<number>(20)
  const [monthlyRate, setMonthlyRate] = useState<number>(800_000)

  // クイック入力ボタンの値
  const quickRates = [3_000, 4_000, 5_000, 6_000, 7_000, 8_000, 9_000, 10_000]
  const quickHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const quickMonthlyRates = [
    300_000, 400_000, 500_000, 600_000, 700_000, 800_000, 900_000, 1_000_000,
    1_100_000, 1_200_000, 1_300_000, 1_400_000, 1_500_000, 1_600_000, 1_700_000,
    1_800_000, 1_900_000, 2_000_000,
  ]

  // 表示用のフォーマット済み値
  const formattedHourlyRate = hourlyRate.toLocaleString()
  const formattedMonthlyRate = monthlyRate.toLocaleString()

  // 月単価を万円・億円表記にフォーマット
  const formatMonthlyRateInManYen = (rate: number): string => {
    // 億円単位
    if (rate >= 100_000_000) {
      const okuYen = Math.floor(rate / 100_000_000)
      const remainderAfterOku = rate % 100_000_000
      const manYen = Math.floor(remainderAfterOku / 10_000)
      const remainder = remainderAfterOku % 10_000

      if (remainderAfterOku === 0) {
        return `${okuYen}億円`
      }
      if (remainder === 0 && manYen > 0) {
        return `${okuYen}億${manYen.toLocaleString()}万円`
      }
      if (manYen === 0 && remainder > 0) {
        return `${okuYen}億${remainder.toLocaleString()}円`
      }
      if (manYen > 0 && remainder > 0) {
        return `${okuYen}億${manYen.toLocaleString()}万${remainder.toLocaleString()}円`
      }
      return `${okuYen}億円`
    }

    // 万円単位
    const manYen = Math.floor(rate / 10_000)
    const remainder = rate % 10_000

    if (remainder === 0) {
      return `${manYen}万円`
    }
    return `${manYen}万${remainder.toLocaleString()}円`
  }

  // 週あたり稼働日数が変更されたときに月あたり稼働日数を自動計算
  useEffect(() => {
    setWorkDaysPerMonth(workDaysPerWeek * 4)
  }, [workDaysPerWeek])

  // 時給→月単価モード: 時給と稼働日数・時間から月単価を計算
  useEffect(() => {
    if (mode === 'hourlyToMonthly') {
      const monthlyRate = hourlyRate * workHoursPerDay * workDaysPerMonth
      setMonthlyRate(monthlyRate)
    }
  }, [mode, hourlyRate, workHoursPerDay, workDaysPerMonth])

  // 月単価→時給モード: 月単価と稼働日数・時間から時給を計算
  useEffect(() => {
    if (
      mode === 'monthlyToHourly' &&
      workDaysPerMonth > 0 &&
      workHoursPerDay > 0
    ) {
      const calculatedHourlyRate = Math.round(
        monthlyRate / (workHoursPerDay * workDaysPerMonth),
      )
      setHourlyRate(calculatedHourlyRate)
    }
  }, [mode, monthlyRate, workHoursPerDay, workDaysPerMonth])

  const adjustHourlyRate = (amount: number) => {
    const newRate = Math.max(1_000, Math.min(1_000_000, hourlyRate + amount))
    setHourlyRate(newRate)
  }

  const adjustWorkDaysPerWeek = (amount: number) => {
    const newDays = Math.max(0, Math.min(7, workDaysPerWeek + amount))
    setWorkDaysPerWeek(newDays)
  }

  const adjustWorkDaysPerMonth = (amount: number) => {
    const newDays = Math.max(0, Math.min(31, workDaysPerMonth + amount))
    setWorkDaysPerMonth(newDays)
  }

  const adjustMonthlyRate = (amount: number) => {
    const newRate = Math.max(0, monthlyRate + amount)
    setMonthlyRate(newRate)
  }

  return (
    <div className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      {/* ヘッダー: モード切り替え */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setMode('hourlyToMonthly')}
            className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
              mode === 'hourlyToMonthly'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            時給 → 月単価
          </button>
          <button
            type="button"
            onClick={() => setMode('monthlyToHourly')}
            className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
              mode === 'monthlyToHourly'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            月単価 → 時給
          </button>
        </div>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {/* 時給入力（時給→月単価モードのみ） */}
        {mode === 'hourlyToMonthly' && (
          <div>
            <label
              htmlFor={hourlyRateId}
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              時給（円）
            </label>
            <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <input
                  id={hourlyRateId}
                  type="number"
                  min={1_000}
                  max={1_000_000}
                  maxLength={7}
                  value={hourlyRate}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    setHourlyRate(Math.max(1_000, Math.min(1_000_000, value)))
                  }}
                  onBlur={(e) => {
                    const value = Number(e.target.value) || 1_000
                    setHourlyRate(Math.max(1_000, Math.min(1_000_000, value)))
                  }}
                  className="w-32 rounded-lg border border-gray-300 px-4 py-2 text-right text-lg font-semibold focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-600">円</span>
              </div>

              {/* 増減ボタン */}
              <div className="flex flex-wrap gap-1">
                <button
                  type="button"
                  onClick={() => adjustHourlyRate(-1000)}
                  disabled={hourlyRate <= 1000}
                  className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
                >
                  -1000
                </button>
                <button
                  type="button"
                  onClick={() => adjustHourlyRate(-500)}
                  disabled={hourlyRate <= 1000}
                  className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
                >
                  -500
                </button>
                <button
                  type="button"
                  onClick={() => adjustHourlyRate(-100)}
                  disabled={hourlyRate <= 1000}
                  className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
                >
                  -100
                </button>
                <button
                  type="button"
                  onClick={() => adjustHourlyRate(100)}
                  disabled={hourlyRate >= 1000000}
                  className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
                >
                  +100
                </button>
                <button
                  type="button"
                  onClick={() => adjustHourlyRate(500)}
                  disabled={hourlyRate >= 1000000}
                  className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
                >
                  +500
                </button>
                <button
                  type="button"
                  onClick={() => adjustHourlyRate(1000)}
                  disabled={hourlyRate >= 1000000}
                  className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
                >
                  +1000
                </button>
              </div>
            </div>

            {/* クイック入力ボタン */}
            <div className="flex flex-wrap gap-2">
              {quickRates.map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => setHourlyRate(rate)}
                  className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                    hourlyRate === rate
                      ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {rate.toLocaleString()}円
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 1日あたり稼働時間 */}
        <div>
          <label
            htmlFor={workHoursPerDayId}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            1日あたり稼働時間
          </label>
          <div className="mb-3 flex items-center gap-2">
            <input
              id={workHoursPerDayId}
              type="number"
              min={1}
              max={24}
              maxLength={2}
              value={workHoursPerDay}
              onChange={(e) => {
                const value = Number(e.target.value)
                setWorkHoursPerDay(Math.max(1, Math.min(24, value)))
              }}
              onBlur={(e) => {
                const value = Number(e.target.value) || 1
                setWorkHoursPerDay(Math.max(1, Math.min(24, value)))
              }}
              className="w-24 rounded-lg border border-gray-300 px-4 py-2 text-right focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-600">時間</span>
          </div>

          {/* クイック入力ボタン */}
          <div className="flex flex-wrap gap-2">
            {quickHours.map((hours) => (
              <button
                key={hours}
                type="button"
                onClick={() => setWorkHoursPerDay(hours)}
                className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                  workHoursPerDay === hours
                    ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {hours}h
              </button>
            ))}
          </div>
        </div>

        {/* 週あたり稼働日数 */}
        <div>
          <label
            htmlFor={workDaysPerWeekId}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            週あたり稼働日数
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <input
              id={workDaysPerWeekId}
              type="number"
              min={0}
              max={7}
              maxLength={1}
              value={workDaysPerWeek}
              onChange={(e) => {
                const value = Number(e.target.value)
                setWorkDaysPerWeek(Math.max(0, Math.min(7, value)))
              }}
              onBlur={(e) => {
                const value = Number(e.target.value) || 0
                setWorkDaysPerWeek(Math.max(0, Math.min(7, value)))
              }}
              className="w-24 rounded-lg border border-gray-300 px-4 py-2 text-right focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-600">日</span>

            {/* 増減ボタン */}
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => adjustWorkDaysPerWeek(-1)}
                disabled={workDaysPerWeek <= 0}
                className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
              >
                -1
              </button>
              <button
                type="button"
                onClick={() => adjustWorkDaysPerWeek(1)}
                disabled={workDaysPerWeek >= 7}
                className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
              >
                +1
              </button>
            </div>
          </div>
        </div>

        {/* 月あたり稼働日数 */}
        <div>
          <label
            htmlFor={workDaysPerMonthId}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            月あたり稼働日数
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <input
              id={workDaysPerMonthId}
              type="number"
              min={0}
              max={31}
              maxLength={2}
              value={workDaysPerMonth}
              onChange={(e) => {
                const value = Number(e.target.value)
                setWorkDaysPerMonth(Math.max(0, Math.min(31, value)))
              }}
              onBlur={(e) => {
                const value = Number(e.target.value) || 0
                setWorkDaysPerMonth(Math.max(0, Math.min(31, value)))
              }}
              className="w-24 rounded-lg border border-gray-300 px-4 py-2 text-right focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-600">日</span>

            {/* 増減ボタン */}
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => adjustWorkDaysPerMonth(-1)}
                disabled={workDaysPerMonth <= 0}
                className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
              >
                -1
              </button>
              <button
                type="button"
                onClick={() => adjustWorkDaysPerMonth(1)}
                disabled={workDaysPerMonth >= 31}
                className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
              >
                +1
              </button>
            </div>
          </div>
        </div>

        {/* 月単価（時給→月単価モードでは計算結果、月単価→時給モードでは入力） */}
        <div>
          <label
            htmlFor={monthlyRateId}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            月あたりの単価
          </label>
          <div className="space-y-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-wrap items-center gap-2">
                {mode === 'hourlyToMonthly' ? (
                  <input
                    id={monthlyRateId}
                    type="text"
                    value={formattedMonthlyRate}
                    disabled
                    className="w-40 rounded-lg border border-blue-300 bg-blue-50 px-4 py-2 text-right text-lg font-semibold text-blue-900 sm:w-48"
                  />
                ) : (
                  <input
                    id={monthlyRateId}
                    type="number"
                    min={0}
                    maxLength={10}
                    value={monthlyRate}
                    onChange={(e) => {
                      const value = Number(e.target.value)
                      setMonthlyRate(Math.max(0, value))
                    }}
                    onBlur={(e) => {
                      const value = Number(e.target.value) || 0
                      setMonthlyRate(Math.max(0, value))
                    }}
                    className="w-40 rounded-lg border border-gray-300 px-4 py-2 text-right text-lg font-semibold focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-48"
                  />
                )}
                <span className="text-gray-600">円</span>
                {mode === 'hourlyToMonthly' && (
                  <span className="text-sm text-blue-600">(計算結果)</span>
                )}
              </div>

              {/* 増減ボタン（月単価→時給モードのみ） */}
              {mode === 'monthlyToHourly' && (
                <div className="flex flex-wrap gap-1">
                  <button
                    type="button"
                    onClick={() => adjustMonthlyRate(-100000)}
                    disabled={monthlyRate < 100000}
                    className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
                  >
                    -10万
                  </button>
                  <button
                    type="button"
                    onClick={() => adjustMonthlyRate(-30000)}
                    disabled={monthlyRate < 30000}
                    className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
                  >
                    -3万
                  </button>
                  <button
                    type="button"
                    onClick={() => adjustMonthlyRate(-10000)}
                    disabled={monthlyRate < 10000}
                    className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200"
                  >
                    -1万
                  </button>
                  <button
                    type="button"
                    onClick={() => adjustMonthlyRate(10000)}
                    className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300"
                  >
                    +1万
                  </button>
                  <button
                    type="button"
                    onClick={() => adjustMonthlyRate(30000)}
                    className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300"
                  >
                    +3万
                  </button>
                  <button
                    type="button"
                    onClick={() => adjustMonthlyRate(100000)}
                    className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300"
                  >
                    +10万
                  </button>
                </div>
              )}
            </div>

            {/* 万円表記（時給→月単価モードの計算結果のみ） */}
            {mode === 'hourlyToMonthly' && (
              <div className="pl-1 text-lg font-medium text-gray-700">
                {formatMonthlyRateInManYen(monthlyRate)}
              </div>
            )}
          </div>

          {/* クイック入力ボタン（月単価→時給モードのみ） */}
          {mode === 'monthlyToHourly' && (
            <div className="mt-3 flex flex-wrap gap-2">
              {quickMonthlyRates.map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => setMonthlyRate(rate)}
                  className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                    monthlyRate === rate
                      ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {(rate / 10000).toFixed(0)}万円
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 時給（月単価→時給モードでは計算結果として表示） */}
        {mode === 'monthlyToHourly' && (
          <div>
            <label
              htmlFor={calculatedHourlyRateId}
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              時給（円）
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <input
                id={calculatedHourlyRateId}
                type="text"
                value={formattedHourlyRate}
                disabled
                className="w-32 rounded-lg border border-blue-300 bg-blue-50 px-4 py-2 text-right text-lg font-semibold text-blue-900"
              />
              <span className="text-gray-600">円</span>
              <span className="text-sm text-blue-600">(計算結果)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
