// ~/composables/ReleaseNotes.ts

// 再利用できるパターン（テンプレ型）
export type TplChange =
  | { type: 'tpl'; id: 'en_support' }
  | { type: 'tpl'; id: 'add_record'; game: string; shot: string; player:string }
  | { type: 'tpl'; id: 'modify_record'; game: string; shot: string; player:string };

// 単発・例外・長文（自由文型）
export type FreeTextChange = {
  type: 'text';
  text: Partial<Record<'ja' | 'en', string>>;
  format?: 'plain' | 'markdown';
};

// ReleaseChange はどちらか
export type ReleaseChange = TplChange | FreeTextChange;

// Release 本体
export type Release = {
  version: string;
  date: string; // ISO
  changes: ReleaseChange[];
};

// データ例
export function UseReleases(): Release[] {
  return [
    {
      version: "1.2.32",
      date: "2026-05-09",
      changes: [
		{ type: "tpl", id: "add_record", game: "th06", shot: "MarisaB", player:"Altair" },
        { type: "tpl", id: "add_record", game: "th06", shot: "MarisaB", player:"Basty" },
		{ type: "tpl", id: "add_record", game: "th06", shot: "MarisaB", player:"Mechanical Lizard" },
        { type: "tpl", id: "add_record", game: "th06", shot: "MarisaB", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th10", shot: "ReimuA", player:"S.K" },
        { type: "tpl", id: "add_record", game: "th10", shot: "MarisaA", player:"S.K" },
        { type: "tpl", id: "add_record", game: "th10", shot: "MarisaB", player:"S.K" },
        { type: "tpl", id: "add_record", game: "th11", shot: "MarisaA", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th11", shot: "MarisaA", player:"K・G" },
        { type: "tpl", id: "add_record", game: "th11", shot: "MarisaC", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th12", shot: "ReimuA", player:"Lorenzo" },
        { type: "tpl", id: "add_record", game: "th12", shot: "ReimuA", player:"w1theR" },
        { type: "tpl", id: "add_record", game: "th12", shot: "SanaeB", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th128", shot: "Cirno", player:"pdh enjoyer" },
        { type: "tpl", id: "add_record", game: "th128", shot: "Cirno", player:"がそりん" },
        { type: "tpl", id: "add_record", game: "th13", shot: "Marisa", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Altair" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"serenity" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Taprus" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"TRDario" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Marbles" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Feng" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Lorenzo" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"shobonzdc" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Reima.H" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Reimu", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Reimu", player:"idtn" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Reisen", player:"idtn" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Reisen", player:"Altair" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Reisen", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Sanae", player:"idtn" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Sanae", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuW", player:"Altair" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuW", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuW", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuE", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuE", player:"Oscar" },
    	{ type: "tpl", id: "add_record", game: "th17", shot: "MarisaO", player:"Balisman" },
    	{ type: "tpl", id: "add_record", game: "th17", shot: "MarisaE", player:"Balisman" },
    	{ type: "tpl", id: "add_record", game: "th17", shot: "YoumuW", player:"Balisman" },
    	{ type: "tpl", id: "add_record", game: "th17", shot: "YoumuO", player:"Altair" },
    	{ type: "tpl", id: "add_record", game: "th17", shot: "YoumuO", player:"Balisman" },
    	{ type: "tpl", id: "add_record", game: "th17", shot: "YoumuO", player:"Anna says hi" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuE", player:"Oscar" },
    	{ type: "tpl", id: "add_record", game: "th18", shot: "Reimu", player:"幽谷もこ" },
    	{ type: "tpl", id: "add_record", game: "th18", shot: "Sakuya", player:"Altair" },
    	{ type: "tpl", id: "add_record", game: "th18", shot: "Sakuya", player:"Balisman" },
    	{ type: "tpl", id: "add_record", game: "th18", shot: "Marisa", player:"幽谷もこ" },
    	{ type: "tpl", id: "add_record", game: "th18", shot: "Sanae", player:"Balisman" },
    	{ type: "tpl", id: "add_record", game: "th18", shot: "Sanae", player:"gryphen" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuR1", player:"ボニスト" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuG1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaB2", player:"ボニスト" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaG1", player:"K・G" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaG1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuY1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuY1", player:"norn" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaY2", player:"節水源一朗" },
      ],
    },
    {
      version: "1.2.31",
      date: "2026-03-13",
      changes: [
        { type: "tpl", id: "add_record", game: "th06", shot: "MarisaB", player:"Altair" },
        { type: "tpl", id: "add_record", game: "th06", shot: "MarisaB", player:"Mechanical Lizard" },
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"Apo" },
        { type: "tpl", id: "add_record", game: "th128", shot: "Cirno", player:"Lorenzo" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Marisa", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaW", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaE", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuW", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th18", shot: "Sanae", player:"Altair" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuG2", player:"幽谷もこ" },
      ],
    },
    {
      version: "1.2.30",
      date: "2026-03-05",
      changes: [
        { type: "tpl", id: "add_record", game: "th12", shot: "SanaeB", player:"burata" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuW", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuE", player:"Balisman" },
    	{ type: "tpl", id: "add_record", game: "th17", shot: "MarisaW", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaE", player:"Balisman" },
      ],
    },
    {
      version: "1.2.29",
      date: "2026-03-05",
      changes: [
        { type: "tpl", id: "add_record", game: "th06", shot: "MarisaB", player:"kana_th6" },
        { type: "tpl", id: "add_record", game: "th10", shot: "ReimuA", player:"Altair" },
        { type: "tpl", id: "add_record", game: "th10", shot: "ReimuB", player:"S.K" },
        { type: "tpl", id: "add_record", game: "th13", shot: "Youmu", player:"idtn" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuG2", player:"節水源一朗" },
      ],
    },
    {
      version: "1.2.28",
      date: "2026-03-01",
      changes: [
        { type: "tpl", id: "add_record", game: "th06", shot: "MarisaB", player:"kana_th6" },
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaE", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuG2", player:"幽谷もこ" },
      ],
    },
    {
      version: "1.2.27",
      date: "2026-02-25",
      changes: [
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaE", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuB1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuY1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuY2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaY2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaR1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaG1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaG2", player:"幽谷もこ" },
      ],
    },
    {
      version: "1.2.26",
      date: "2026-02-24",
      changes: [
        { type: "tpl", id: "add_record", game: "th10", shot: "ReimuC", player:"S.K" },
        { type: "tpl", id: "add_record", game: "th12", shot: "ReimuA", player:"w1theR" },
        { type: "tpl", id: "add_record", game: "th12", shot: "SanaeB", player:"Novus" },
        { type: "tpl", id: "add_record", game: "th18", shot: "Reimu", player:"Altair" },
        { type: "tpl", id: "add_record", game: "th18", shot: "Reimu", player:"serenity" },
        { type: "tpl", id: "add_record", game: "th18", shot: "Sakuya", player:"Azazaz" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaR2", player:"ボニスト" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaY2", player:"Ecoさわ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaG1", player:"節水源一朗" },
      ],
    },
    {
      version: "1.2.25",
      date: "2026-02-21",
      changes: [
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Marbles" },
        { type: "tpl", id: "add_record", game: "th18", shot: "Sanae", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuR2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuB2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaR2", player:"ボニスト" },
      ],
    },
    {
      version: "1.2.24",
      date: "2026-02-19",
      changes: [
        { type: "tpl", id: "add_record", game: "th07EX", shot: "ReimuB", player:"こむそう" },
        { type: "tpl", id: "add_record", game: "th18", shot: "Sanae", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaR2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaR2", player:"ボニスト" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaG1", player:"ボニスト" },
      ],
    },
    {
      version: "1.2.23",
      date: "2026-02-18",
      changes: [
        { type: "tpl", id: "add_record", game: "th06", shot: "ReimuA", player:"int" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuW", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th18", shot: "Sanae", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaR2", player:"ボニスト" },
      ],
    },
    {
      version: "1.2.22",
      date: "2026-02-17",
      changes: [
        { type: "tpl", id: "add_record", game: "th12", shot: "ReimuA", player:"w1theR" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuR1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaR2", player:"ボニスト" },
      ],
    },
    {
      version: "1.2.21",
      date: "2026-02-15",
      changes: [
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Marbles" },
        { type: "tpl", id: "add_record", game: "th16", shot: "Aya", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuE", player:"Balisman" },
      ],
    },
    {
      version: "1.2.20",
      date: "2026-02-14",
      changes: [
        { type: "tpl", id: "add_record", game: "th12", shot: "ReimuA", player:"w1theR" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Marbles" },
      ],
    },
    {
      version: "1.2.19",
      date: "2026-02-11",
      changes: [
        { type: "tpl", id: "add_record", game: "th13", shot: "Youmu", player:"clanc" },
        { type: "tpl", id: "add_record", game: "th13", shot: "Marisa", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th16", shot: "Aya", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuO", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaE", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuE", player:"Balisman" },
      ],
    },
		{
      version: "1.2.18",
      date: "2026-02-11",
      changes: [
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuG1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaB2", player:"幽谷もこ" },
      ],
    },
		{
      version: "1.2.17",
      date: "2026-02-06",
      changes: [
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuG1", player:"幽谷もこ" },
      ],
    },
		{
      version: "1.2.16",
      date: "2026-02-04",
      changes: [
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaO", player:"Oscar" },
      ],
    },
		{
      version: "1.2.15",
      date: "2026-02-03",
      changes: [
        { type: "tpl", id: "add_record", game: "th11", shot: "MarisaB", player:"われもこう" },
      ],
    },
		{
      version: "1.2.14",
      date: "2026-01-31",
      changes: [
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Reima.H" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuO", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaW", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaO", player:"Balisman" },
      ],
    },
		{
      version: "1.2.13",
      date: "2026-01-27",
      changes: [
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaW", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaO", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaE", player:"Balisman" },
      ],
    },
		{
      version: "1.2.12",
      date: "2026-01-26",
      changes: [
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"wimirei" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuO", player:"Balisman" },
      ],
    },
		{
      version: "1.2.11",
      date: "2026-01-24",
      changes: [
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"工藤氏。" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Reisen", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaR2", player:"ボニスト" },
      ],
    },
		{
      version: "1.2.10",
      date: "2026-01-20",
      changes: [
        { type: "tpl", id: "add_record", game: "th12", shot: "ReimuA", player:"w1theR" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Reimu", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Marisa", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuO", player:"Anna says hi" },
      ],
    },
    {
      version: "1.2.9",
      date: "2026-01-18",
      changes: [
        { type: "tpl", id: "add_record", game: "th10", shot: "MarisaC", player:"S.K" },
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuC", player:"idtn" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Sanae", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuW", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuE", player:"Balisman" },
      ],
    },
    {
      version: "1.2.8",
      date: "2026-01-17",
      changes: [
        { type: "tpl", id: "add_record", game: "th14", shot: "SakuyaA", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th15", shot: "Reimu", player:"Oscar" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuO", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuW", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuE", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuO", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuR1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuR2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuB1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuB2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuY1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuY2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaR1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaR2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaB1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaB2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaY1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaY2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaG1", player:"幽谷もこ" },
      ],
    },
    {
      version: "1.2.7",
      date: "2025-12-01",
      changes: [
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"Altair" },
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuB", player:"idtn" },
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuB", player:"shobonzdc" },
        { type: "tpl", id: "add_record", game: "th12", shot: "SanaeB", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuO", player:"Anna says hi" },
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaO", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuO", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuR1", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuR2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuB2", player:"幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th20", shot: "ReimuG1", player:"幽谷もこ" },
      ],
    },
    {
      version: "1.2.6",
      date: "2025-11-11",
      changes: [
        { type: "tpl", id: "add_record", game: "th10", shot: "ReimuB", player:"sirpion" },
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"Balisman" },
      ],
    },
    {
      version: "1.2.5",
      date: "2025-11-07",
      changes: [
        { type: "tpl", id: "add_record", game: "th12", shot: "MarisaA", player:"Novus" },
        { type: "tpl", id: "add_record", game: "th14", shot: "ReimuA", player:"Balisman" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuO", player:"Anna says hi" },
      ],
    },
    {
      version: "1.2.4",
      date: "2025-10-27",
      changes: [
        { type: "text", text: { ja: "リプレイファイル登録 : 東方神霊廟 魔理沙 WEF", en: "add replay file : TD Marisa WEF" } },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"wimirei" },
        { type: "tpl", id: "add_record", game: "th17", shot: "YoumuO", player:"Anna says hi" },
        { type: "tpl", id: "add_record", game: "th20", shot: "MarisaY2", player:"幽谷もこ" },
      ],
    },
    {
      version: "1.2.3",
      date: "2025-10-24",
      changes: [
        { type: "text", text: { ja: "レイアウト修正", en: "Modified the layout" } },
        { type: "text", text: { ja: "ステータスによる並び替え機能を実装", en: "Added sorting functionality by status" } },
        { type: "text", text: { ja: "基準スコア変更 : 鬼形獣 nonカワウソ 15億→10億", en: "Changed threshold score : th17 non Otter 1.5B→1B" } },
      ],
    },
    {
      version: "1.2.2",
      date: "2025-10-23",
      changes: [
        { type: "text", text: { ja: "更新履歴の多言語対応", en: "Update History Support for English" } },
        { type: "text", text: { ja: "3種類の基準スコアに対応", en: "Supports three types of thresholds" } },
        { type: "text", text: { ja: "統計データにユニーク人数を追加", en: "Added the number of unique players to statistical data" } },
        { type: "text", text: { ja: "統計データに機体別の人数を追加", en: "Added the number of players by shot type to statistical data." } },
      ],
    },
    {
      version: "1.2.1",
      date: "2025-10-22",
      changes: [
        { type: "text", text: { ja: "東方錦上京に対応", en: "Supported th20" } },
      ],
    },
    {
      version: "1.1.31",
      date: "2025-10-21",
      changes: [
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuO", player:"Balisman" },
      ],
    },
    {
      version: "1.1.30",
      date: "2025-10-15",
      changes: [
        { type: "tpl", id: "add_record", game: "th07Ph", shot: "SakuyaB", player:"Oscar"},
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"TRDario"},
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"h3po49"},
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"dass"},
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Mistery"},
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuO", player:"Balisman"},
        { type: "tpl", id: "add_record", game: "th17", shot: "MarisaO", player:"Balisman"},
      ],
    },
    {
      version: "1.1.29",
      date: "2025-10-09",
      changes: [
        { type: "text", text: { ja: "作品変更時にデフォルトで全機体を選択するように修正", en: "Fixed to set shottype to all when switching games" } },
      ],
    },
    {
      version: "1.1.28",
      date: "2025-10-05",
      changes: [
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"wimirei"},
        { type: "tpl", id: "add_record", game: "th07Ph", shot: "SakuyaB", player:"Oscar"},
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"Taprus"},
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Balisman"},
      ],
    },
    {
      version: "1.1.27",
      date: "2025-09-29",
      changes: [
        { type: "tpl", id: "add_record", game: "th10", shot: "ReimuA", player:"おんなのこ"},
        { type: "tpl", id: "add_record", game: "th10", shot: "ReimuA", player:"TSG"},
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"TRDario"},
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"Altair"},
        { type: "text", text: { ja: "プレイヤー検索機能を改良", en: "Improved the Player Search Function" } },
      ],
    },
    {
      version: "1.1.26",
      date: "2025-09-28",
      changes: [
        { type: "text", text: { ja: "機体表記の表示不具合を修正", en: "Fixed display issue with shot type notation" } },
        { type: "text", text: { ja: "更新履歴のプレイヤー名を多言語対応", en: "Added Endlish support for player names in the update history" } },
      ],
    },
    {
      version: "1.1.25",
      date: "2025-09-27",
      changes: [
        { type: "text", text: { ja: "更新履歴の多言語対応", en: "Update History Support for English" } },
      ],
    },
    {
      version: "1.1.24",
      date: "2025-09-25",
      changes: [
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"Altair"},
        { type: "text", text: { ja: "th16の機体表記を修正", en: "Modified the shot type notation for th16" } },
        { type: "text", text: { ja: "英語翻訳の追加", en: "Added English translations" } },
      ],
    },
    {
      version: "1.1.23",
      date: "2025-09-23",
      changes: [
        { type: "tpl", id: "add_record", game: "th10", shot: "ReimuA", player:"おんなのこ"},
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"Balisman"},
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"wimirei"},
      ],
    },
    {
      version: "1.1.22",
      date: "2025-09-20",
      changes: [
        { type: "text", text: { ja: "英語に対応", en: "Added English support" } },
      ],
    },
    {
      version: "1.1.21",
      date: "2025-09-18",
      changes: [
        { type: "tpl", id: "add_record", game: "th06", shot: "ReimuA", player:"int"},
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"Oscar"},
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Oscar"},
      ],
    },
    {
      version: "1.1.20",
      date: "2025-09-04",
      changes: [
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"幽谷もこ"},
        { type: "tpl", id: "add_record", game: "th16", shot: "Cirno/Aya/Marisa", player:"幽谷もこ"},
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuO/MarisaO", player:"幽谷もこ"},
      ],
    },
    {
      version: "1.1.19",
      date: "2025-09-02",
      changes: [
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"Altair"},
      ],
    },
    {
      version: "1.1.18",
      date: "2025-08-25",
      changes: [
        { type: "text", text: { ja: "リンク周りの修正", en: "Fixed link issues" } },
      ],
    },
    {
      version: "1.1.17",
      date: "2025-08-15",
      changes: [
        { type: "tpl", id: "add_record", game: "th15", shot: "Reisen", player:"Oscar"},
      ],
    },
    {
      version: "1.1.16",
      date: "2025-08-13",
      changes: [
        { type: "tpl", id: "add_record", game: "th15", shot: "Reisen", player:"Oscar"},
      ],
    },
    {
      version: "1.1.15",
      date: "2025-08-13",
      changes: [
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player:"WEF"},
      ],
    },
    {
      version: "1.1.14",
      date: "2025-08-08",
      changes: [
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player:"Balisman"},
      ],
    },
    {
      version: "1.1.13",
      date: "2025-08-05",
      changes: [
        { type: "tpl", id: "add_record", game: "th12", shot: "ReimuA", player:"w1theR"},
        { type: "tpl", id: "modify_record", game: "th08", shot: "Youmu", player:"Sakurei"},
      ],
    },
    {
      version: "1.1.12",
      date: "2025-08-04",
      changes: [
        { type: "tpl", id: "add_record", game: "th15", shot: "Reisen", player:"Add4567"},
      ],
    },
    {
      version: "1.1.11",
      date: "2025-08-03",
      changes: [
        { type: "text", text: { ja: "基準スコア変更 : 永夜抄 ペア・人間単騎 24億→25億", en: "Changed threshold score : th08 Teams and Solo Human 2.4B→2.5B" } },
        { type: "text", text: { ja: "基準スコア変更 : 鬼形獣 nonカワウソ 10億→15億", en: "Changed threshold score : th17 non Otter 1B→1.5B" } },
      ],
    },
    {
      version: "1.1.10",
      date: "2025-07-31",
      changes: [
        { type: "tpl", id: "modify_record", game: "th12", shot: "SanaeB", player:"あねみ"},
      ],
    },
    {
      version: "1.1.9",
      date: "2025-07-28",
      changes: [
        { type: "text", text: { ja: "最近の記録を追加", en: "Added recent records" } },
      ],
    },
    {
      version: "1.1.8",
      date: "2025-07-28",
      changes: [
        { type: "tpl", id: "add_record", game: "th10", shot: "MarisaC", player:"もち"},
      ],
    },
    {
      version: "1.1.7",
      date: "2025-07-28",
      changes: [
        { type: "text", text: { ja: "データに達成者合計を追加", en: "Added total achievers to data" } },
      ],
    },
    {
      version: "1.1.6",
      date: "2025-07-28",
      changes: [
        { type: "tpl", id: "add_record", game: "th16", shot: "Reimu", player:"幽谷もこ"},
        { type: "tpl", id: "add_record", game: "th18", shot: "Sakuya", player:"工藤氏。"},
      ],
    },
    {
      version: "1.1.5",
      date: "2025-07-28",
      changes: [
        { type: "text", text: { ja: "掲載対象となる記録について明記", en: "Clarified which records are listed" } },
      ],
    },
    {
      version: "1.1.4",
      date: "2025-07-27",
      changes: [
        { type: "text", text: { ja: "記録追加 : 東方神霊廟/東方輝針城/東方天空璋/東方鬼形獣", en: "add record : th13/th14/th16/th17" } },
      ],
    },
    {
      version: "1.1.3",
      date: "2025-07-26",
      changes: [
        { type: "tpl", id: "add_record", game: "th06", shot: "MarisaB", player:"Pearl"},
      ],
    },
    {
      version: "1.1.2",
      date: "2025-07-25",
      changes: [
        { type: "text", text: { ja: "記録掲載について追記", en: "Added notes about record listings" } },
        { type: "text", text: { ja: "一部記録の修正", en: "Corrected some records" } },
      ],
    },
    {
      version: "1.1.1",
      date: "2025-07-25",
      changes: [
        { type: "text", text: { ja: "サイト公開", en: "Site launched" } },
      ],
    },
    {
      version: "0.9.5",
      date: "2025-07-25",
      changes: [
        { type: "text", text: { ja: "リプレイファイルの一斉登録", en: "Batch uploaded replay files" } },
        { type: "text", text: { ja: "ページ概要更新", en: "Updated page overview" } },
      ],
    },
    {
      version: "0.9.4",
      date: "2025-07-23",
      changes: [
        { type: "text", text: { ja: "サイト概要に運営方針掲載", en: "Added policy to site overview" } },
      ],
    },
    {
      version: "0.9.3",
      date: "2025-07-23",
      changes: [
        { type: "tpl", id: "modify_record", game: "th13", shot: "Marisa", player:"WEF"},
      ],
    },
    {
      version: "0.9.2",
      date: "2025-07-23",
      changes: [
        { type: "text", text: { ja: "favicon更新", en: "Updated favicon" } },
      ],
    },
    {
      version: "0.9.1",
      date: "2025-07-22",
      changes: [
        { type: "text", text: { ja: "現存の記録を一斉登録", en: "Batch registered existing records" } },
        { type: "text", text: { ja: "ページ概要・リンク一覧更新", en: "Updated page overview and links" } },
      ],
    },
    {
      version: "0.9.0",
      date: "2025-07-19",
      changes: [
        { type: "text", text: { ja: "サイト大枠の完成", en: "Overall framework completed" } },
        { type: "text", text: { ja: "運用方針の策定", en: "Established operational policy" } },
      ],
    },
  ];
}
