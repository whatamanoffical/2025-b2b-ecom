export const quoteFields = [
  "id",
  "status",
  "comments.*",
  "comments.admin.*",
  "comments.customer.*",
  "cart.id",
  "draft_order.id",
  "draft_order.currency_code",
  "draft_order.display_id",
  "draft_order.region_id",
  "draft_order.status",
  "draft_order.version",
  "draft_order.summary",
  "draft_order.total",
  "draft_order.subtotal",
  "draft_order.tax_total",
  "draft_order.order_change",
  "draft_order.discount_total",
  "draft_order.discount_tax_total",
  "draft_order.original_total",
  "draft_order.original_tax_total",
  "draft_order.item_total",
  "draft_order.item_subtotal",
  "draft_order.item_tax_total",
  "draft_order.original_item_total",
  "draft_order.original_item_subtotal",
  "draft_order.original_item_tax_total",
  "draft_order.shipping_total",
  "draft_order.shipping_subtotal",
  "draft_order.shipping_tax_total",
  "draft_order.original_shipping_tax_total",
  "draft_order.original_shipping_subtotal",
  "draft_order.original_shipping_total",
  "draft_order.created_at",
  "draft_order.updated_at",
  "*draft_order.items",
  "*draft_order.items.tax_lines",
  "*draft_order.items.adjustments",
  "*draft_order.items.variant",
  "*draft_order.items.variant.product",
  "*draft_order.items.detail",
  "*draft_order.payment_collections",
  "order_change.actions.*",
];

export const retrieveQuoteTransformQueryConfig = {
  defaults: quoteFields,
  isList: false,
};

export const listQuotesTransformQueryConfig = {
  defaults: quoteFields,
  isList: true,
};
