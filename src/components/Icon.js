/* eslint-disable import/order */
import React from "react";
import PropTypes from "prop-types";
import styled, { useTheme } from "styled-components";
import { space, position, system, color, border, layout } from "styled-system";
import { getThemeColor } from "../../util/styledComponent";
import useHover from "../../customHooks/useHover";

import { ReactComponent as ActiveDot } from "./active-dot.svg";
import { ReactComponent as QuestionMark } from "./question-mark.svg";
import { ReactComponent as Search } from "./search.svg";
import { ReactComponent as Plus } from "./plus.svg";
import { ReactComponent as Hr } from "./hr.svg";
import { ReactComponent as Account } from "./account.svg";
import { ReactComponent as Annonce } from "./annonce.svg";
import { ReactComponent as Operation } from "./operation.svg";
import { ReactComponent as Dashboard } from "./dashboard.svg";
import { ReactComponent as Interface } from "./interface.svg";
import { ReactComponent as Quality } from "./quality.svg";
import { ReactComponent as Insights } from "./insights.svg";
import { ReactComponent as Eye } from "./eye.svg";
import { ReactComponent as EyeCrossed } from "./eye-crossed.svg";
import { ReactComponent as Reply } from "./reply.svg";
import { ReactComponent as Forward } from "./forward.svg";
import { ReactComponent as Delete } from "./delete.svg";
import { ReactComponent as Comment } from "./comment.svg";
import { ReactComponent as ThumbUp } from "./thumb-up.svg";
import { ReactComponent as ArrowDown } from "./arrowDown.svg";
import { ReactComponent as Meeting } from "./meeting.svg";
import { ReactComponent as Theme } from "./theme.svg";
import { ReactComponent as Setting } from "./setting.svg";
import { ReactComponent as Sales } from "./sales.svg";
import { ReactComponent as LeftIcon } from "./left-icon.svg";
// import { ReactComponent as RightIcon } from "./right-icon.svg";
import { ReactComponent as Down } from "./down.svg";
import { ReactComponent as Up } from "./up.svg";
import { ReactComponent as Calendar } from "./calendar.svg";
import { ReactComponent as CheckboxEmpty } from "./checkbox-empty.svg";
import { ReactComponent as CheckboxFilled } from "./checkbox_filled.svg";
import { ReactComponent as SquareWithTick } from "./squareWithTick.svg";
import { ReactComponent as SwitchOn } from "./switch-on.svg";
import { ReactComponent as SwitchOff } from "./switch-off.svg";
import { ReactComponent as Info } from "./info.svg";
import { ReactComponent as CloseIcon } from "./close.svg";
import { ReactComponent as Edit } from "./edit.svg";
import { ReactComponent as AdminEdit } from "./adminEdit.svg";
import { ReactComponent as Export } from "./export.svg";
import { ReactComponent as SearchBG } from "./searchBG.svg";
import { ReactComponent as Tick } from "./tick.svg";
import { ReactComponent as ArrowBottom } from "./arrow-bottom.svg";
import { ReactComponent as ArrowUp } from "./arrow-up.svg";
import { ReactComponent as ArrowUpDown } from "./arrow-up-down.svg";
import { ReactComponent as Messages } from "./messages.svg";
import { ReactComponent as Personal } from "./personal.svg";
import { ReactComponent as NextDay } from "./nextday.svg";
import { ReactComponent as Job } from "./job.svg";
import { ReactComponent as InternalComm } from "./internalcomm.svg";
import { ReactComponent as Schedule } from "./schedule.svg";
import { ReactComponent as Refer } from "./refer.svg";
import { ReactComponent as UserIcon } from "./userIcon.svg";
import { ReactComponent as NoResult } from "./noResult.svg";
import { ReactComponent as WhiteToggle } from "./whitetoggle.svg";
import { ReactComponent as BlackToggle } from "./blacktoggle.svg";
import { ReactComponent as Donation } from "./donation.svg";
import { ReactComponent as WalletMoneyM } from "./walletMoneyM.svg";
import { ReactComponent as BlogPublishing } from "./BlogPublishing.svg";
import { ReactComponent as MosqueLocation } from "./MosqueLocation.svg";
import { ReactComponent as MessageQuestion } from "./messageQuestion.svg";
import { ReactComponent as UsersQuare } from "./usersQuare.svg";
import { ReactComponent as DSquare } from "./dsquare.svg";
import { ReactComponent as WdiscountShape } from "./WdiscountShape.svg";
import { ReactComponent as Wlogout } from "./wlogout.svg";
import { ReactComponent as WmessageQuestion } from "./WmessageQuestion.svg";
import { ReactComponent as WuserSquare } from "./WuserSquare.svg";
import { ReactComponent as WuserSquareTwo } from "./WuserSquareTwo.svg";
import { ReactComponent as WwalletMoney } from "./WwalletMoney.svg";
import { ReactComponent as WwalletMoneyTwo } from "./WwalletMoneyTwo.svg";
import { ReactComponent as WwalletMoneyThree } from "./WwalletMoneyThree.svg";
import { ReactComponent as DiscountShape } from "./DiscountShape.svg";
import { ReactComponent as ListMenu } from "./ListMenu.svg";
import { ReactComponent as arrowDownYellow } from "./arrowDownYellow.svg";
import { ReactComponent as arrowUpBlue } from "./arrowUpBlue.svg";
import { ReactComponent as arrowUpGreen } from "./arrowUpGreen.svg";
import { ReactComponent as PendingDonations } from "./PendingDonations.svg";
import { ReactComponent as TotalDonation } from "./TotalDonations.svg";
import { ReactComponent as Userpaid } from "./Userpaid.svg";
import { ReactComponent as rightIcon } from "./rightIcon.svg";
import { ReactComponent as GreyFillArrow } from "./greyFillArrow.svg";
import { ReactComponent as BellIcon } from "./BellIcon.svg";
import { ReactComponent as BellIconWhite } from "./BellIconWhite.svg";
import { ReactComponent as Next } from "./Next.svg";
import { ReactComponent as User } from "./user.svg";
import { ReactComponent as Payment } from "./payment.svg";
import { ReactComponent as historyMsg } from "./historyMsg.svg";
import { ReactComponent as Cross } from "./cross.svg";
import { ReactComponent as WhiteTick } from "./white-tick.svg";
import { ReactComponent as Hamburger } from "./hamburger.svg";
import { ReactComponent as SuccessStamp } from "./success_stamp.svg";
import { ReactComponent as Mosques } from "./mosques.svg";
import { ReactComponent as Members } from "./members.svg";
import { ReactComponent as Financials } from "./financials.svg";
import { ReactComponent as modalClose } from "./modalClose.svg";
import { ReactComponent as congratulations } from "./congratulations.svg";
import { ReactComponent as tableEdit } from "./tableEdit.svg";
import { ReactComponent as tableGraph } from "./tableGraph.svg";
import { ReactComponent as financialYellow } from "./financialYellow.svg";
import { ReactComponent as financialPink } from "./financialPink.svg";
import { ReactComponent as financialBlue } from "./financialBlue.svg";
import { ReactComponent as Camera } from "./camera.svg";
import { ReactComponent as Logout } from "./logout.svg";
import { ReactComponent as UpArrow } from "./upArrow.svg";
import { ReactComponent as DownArrow } from "./downArrow.svg";
import { ReactComponent as GoogleLogo } from "./google-logo.svg";
import { ReactComponent as FacebookLogo } from "./facebook-logo.svg";
import { ReactComponent as WalletMoneyActive } from "./walletMoneyActive.svg";
import { ReactComponent as FilledClose } from "./filledClose.svg";
import { ReactComponent as BlackCross } from "./blackCross.svg";
import { ReactComponent as Save } from "./save.svg";
import { ReactComponent as NotSaved } from "./notSaved.svg";
import { ReactComponent as DonationWhite } from "./donationWhite.svg";
import { ReactComponent as OrderDots } from "./orderDots.svg";
import { ReactComponent as CheckBoxEmptyWhite } from "./checkBoxEmptyWhite.svg";
import { ReactComponent as SquareWithTickWhite } from "./squareWithTickWhite.svg";
import { ReactComponent as FourSquare } from "./fourSquare.svg";
import { ReactComponent as Flip } from "./flip.svg";
import { ReactComponent as MapIcon } from "./map-icon.svg";
import { ReactComponent as DownloadIcon } from "./DonwloadIcon.svg";
import { ReactComponent as DownloadIconWhite} from "./downloadIconWhite.svg"

// Always keep this list alphabetically sorted
export const iconMap = {
  account: Account,
  activeDot: ActiveDot,
  arrowBottom: ArrowBottom,
  arrowDown: ArrowDown,
  arrowUpDown: ArrowUpDown,
  arrowUp: ArrowUp,
  checkboxEmpty: CheckboxEmpty,
  checkBoxEmptyWhite: CheckBoxEmptyWhite,
  checkboxFilled: CheckboxFilled,
  close: CloseIcon,
  comment: Comment,
  delete: Delete,
  download:DownloadIcon,
  edit: Edit,
  AdminEdit: AdminEdit,
  export: Export,
  eye: Eye,
  eyeCrossed: EyeCrossed,
  forward: Forward,
  filledClose: FilledClose,
  flip: Flip,
  info: Info,
  questionMark: QuestionMark,
  search: Search,
  plus: Plus,
  hr: Hr,
  annonce: Annonce,
  meeting: Meeting,
  operation: Operation,
  dashboard: Dashboard,
  interface: Interface,
  quality: Quality,
  insights: Insights,
  reply: Reply,
  theme: Theme,
  thumbUp: ThumbUp,
  sales: Sales,
  searchBG: SearchBG,
  setting: Setting,
  leftIcon: LeftIcon,
  // rightIcon: RightIcon,
  down: Down,
  up: Up,
  calendar: Calendar,
  squareWithTick: SquareWithTick,
  switchOn: SwitchOn,
  switchOff: SwitchOff,
  tick: Tick,
  messages: Messages,
  nextDay: NextDay,
  job: Job,
  internalComm: InternalComm,
  schedule: Schedule,
  refer: Refer,
  personal: Personal,
  userIcon: UserIcon,
  noResult: NoResult,
  whitetoggle: WhiteToggle,
  blacktoggle: BlackToggle,
  donation: Donation,
  walletmoneyM: WalletMoneyM,
  blogPublishing: BlogPublishing,
  mosqueLocation: MosqueLocation,
  messageQuestion: MessageQuestion,
  usersQuare: UsersQuare,
  dSquare: DSquare,
  WdiscountShape: WdiscountShape,
  wlogout: Wlogout,
  WmessageQuestion: WmessageQuestion,
  WuserSquare: WuserSquare,
  WuserSquareTwo: WuserSquareTwo,
  WwalletMoney: WwalletMoney,
  WwalletMoneyTwo: WwalletMoneyTwo,
  WwalletMoneyThree: WwalletMoneyThree,
  DiscountShape: DiscountShape,
  ListMenu: ListMenu,
  arrowUpGreen: arrowUpGreen,
  arrowUpBlue: arrowUpBlue,
  arrowDownYellow: arrowDownYellow,
  PendingDonations: PendingDonations,
  TotalDonation: TotalDonation,
  Userpaid: Userpaid,
  rightIcon: rightIcon,
  greyFillArrow: GreyFillArrow,
  BellIcon: BellIcon,
  BellIconWhite: BellIconWhite,
  Next: Next,
  cross: Cross,
  historyMsg: historyMsg,
  payment: Payment,
  user: User,
  WhiteTick: WhiteTick,
  Hamburger: Hamburger,
  successStamp: SuccessStamp,
  mosques: Mosques,
  members: Members,
  financials: Financials,
  modalClose: modalClose,
  congratulations: congratulations,
  tableEdit: tableEdit,
  tableGraph: tableGraph,
  financialYellow: financialYellow,
  financialPink: financialPink,
  financialBlue: financialBlue,
  Camera: Camera,
  Logout: Logout,
  downArrow: DownArrow,
  upArrow: UpArrow,
  googleLogo: GoogleLogo,
  facebookLogo: FacebookLogo,
  walletMoneyActive: WalletMoneyActive,
  blackCross: BlackCross,
  save: Save,
  notSaved: NotSaved,
  donationWhite: DonationWhite,
  orderDots: OrderDots,
  squareWithTickWhite: SquareWithTickWhite,
  fourSquare: FourSquare,
  mapIcon: MapIcon,
  downloadWhite: DownloadIconWhite
};

const iconSizeMap = {
  xl: "76px",
  "2large": "60px",
  large: "42px",
  normal: "36px",
  small: "24px",
  xs: "19px",
  "2xs": "16px",
  tiny: "13px",
  "2tiny": "10px",
};

const StyledIcon = styled.div`
  height: ${(props) => iconSizeMap[props.iconSize]};
  width: ${(props) => iconSizeMap[props.iconSize]};
  cursor: ${(props) => (props.onClick ? "pointer" : null)};
  display: flex;

  & > svg {
    transform: ${(props) => props.svgTransform ?? "none"};
  }

  ${space}
  ${position}
  ${layout}
  ${color}
  ${border}

  ${system({
    transform: {
      property: "transform",
    },
    cursor: {
      property: "cursor",
    },
  })}
`;

// IconSize is predefined sizes

const IconWrapper = ({
  iconName,
  onClick,
  iconSize,
  noWrapper,
  stroke,
  hoverColor,
  ...rest
}) => {
  const theme = useTheme();

  const [ref, isIconHovered] = useHover();

  const IconSVG = iconMap[iconName] || QuestionMark;
  const iconProps = {};
  if (rest.color) {
    iconProps.fill = getThemeColor(
      theme,
      isIconHovered && hoverColor ? hoverColor : rest.color
    );
  }
  if (iconSize || rest.height) {
    iconProps.height = iconSizeMap[iconSize] || rest.height;
  }
  if (iconSize || rest.width) {
    iconProps.width = iconSizeMap[iconSize] || rest.width;
  }

  if (stroke) {
    iconProps.stroke = stroke;
  }

  if (rest.iconClass) {
    iconProps.className = rest.iconClass;
  }

  if (!noWrapper) {
    return (
      <>
        <StyledIcon {...rest} ref={ref} iconSize={iconSize} onClick={onClick}>
          <IconSVG {...iconProps} />
        </StyledIcon>
      </>
    );
  }
  return (
    <>
      <IconSVG {...rest} ref={ref} {...iconProps} onClick={onClick} />
    </>
  );
};

IconWrapper.propTypes = {
  onClick: PropTypes.func,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.oneOf([
    "xl",
    "2large",
    "large",
    "normal",
    "small",
    "xs",
    "2xs",
    "tiny",
    "2tiny",
  ]),
  noWrapper: PropTypes.bool,
  stroke: PropTypes.string,
};

IconWrapper.defaultProps = {
  noWrapper: false,
};

export default IconWrapper;
